import sys
from flask import Flask, redirect, url_for, flash, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm.exc import NoResultFound
from flask_dance.contrib.github import make_github_blueprint, github
from flask_dance.consumer.backend.sqla import OAuthConsumerMixin, SQLAlchemyBackend
from flask_dance.consumer import oauth_authorized, oauth_error
from flask_login import (
    LoginManager, UserMixin, current_user,
    login_required, login_user, logout_user
)

"""
# setup Flask application
app = Flask(__name__)
app.secret_key = "supersekrit"

blueprint = make_github_blueprint(
    client_id="my-key-here",
    client_secret="my-secret-here",
)
app.register_blueprint(blueprint, url_prefix="/login")
"""

def setup_backend(app, blueprint):

    # setup database models
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///multi.db"
    db = SQLAlchemy()

    class User(db.Model, UserMixin):
        id = db.Column(db.Integer, primary_key=True)
        # Your User model can include whatever columns you want: Flask-Dance doesn't care.
        # Here are a few columns you might find useful, but feel free to modify them
        # as your application needs!
        username = db.Column(db.String(256), unique=True)
        email = db.Column(db.String(256), unique=True)
        name = db.Column(db.String(256))

    class OAuth(OAuthConsumerMixin, db.Model):
        provider_user_id = db.Column(db.String(256), unique=True)
        user_id = db.Column(db.Integer, db.ForeignKey(User.id))
        user = db.relationship(User)

    # setup login manager
    login_manager = LoginManager()
    # login_manager.login_view = 'github.login'

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # setup SQLAlchemy backend
    blueprint.backend = SQLAlchemyBackend(OAuth, db.session, user=current_user)

    # create/login local user on successful OAuth login
    @oauth_authorized.connect_via(blueprint)
    def provider_logged_in(blueprint, token):
        if not token:
            flash("Failed to log in with provider.", category="error")
            return False

        resp = blueprint.session.get("/user")
        if not resp.ok:
            msg = "Failed to fetch user info from provider."
            flash(msg, category="error")
            return False

        provider_info = resp.json()
        provider_user_id = str(provider_info["id"])

        # Find this OAuth token in the database, or create it
        query = OAuth.query.filter_by(
            provider=blueprint.name,
            provider_user_id=provider_user_id,
        )
        try:
            oauth = query.one()
        except NoResultFound:
            oauth = OAuth(
                provider=blueprint.name,
                provider_user_id=provider_user_id,
                token=token,
            )

        if oauth.user:
            login_user(oauth.user)
            flash("Successfully signed in with provider.")

        else:
            # Create a new local user account for this user
            user = User(
                # Remember that `email` can be None, if the user declines
                # to publish their email address on GitHub!
                email=provider_info["email"],
                name=provider_info["name"],
            )
            # Associate the new local user account with the OAuth token
            oauth.user = user
            # Save and commit our database models
            db.session.add_all([user, oauth])
            db.session.commit()
            # Log in the new local user account
            login_user(user)
            flash("Successfully signed in with provider.")

        # Disable Flask-Dance's default behavior for saving the OAuth token
        return False

    # notify on OAuth provider error
    @oauth_error.connect_via(blueprint)
    def provider_error(blueprint, error, error_description=None, error_uri=None):
        msg = (
            "OAuth error from {name}! "
            "error={error} description={description} uri={uri}"
        ).format(
            name=blueprint.name,
            error=error,
            description=error_description,
            uri=error_uri,
        )
        flash(msg, category="error")

    @app.route("/logout")
    @login_required
    def logout():
        logout_user()
        flash("You have logged out")
        return redirect(url_for("index"))

    @app.route("/")
    def index():
        return render_template("home.html")

    # hook up extensions to app
    db.init_app(app)
    login_manager.init_app(app)


if __name__ == "__main__":
    """
    if "--setup" in sys.argv:
        with app.app_context():
            db.create_all()
            db.session.commit()
            print("Database tables created")
    else:
        app.run(debug=True)
    """