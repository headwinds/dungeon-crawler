import os
from flask import Flask, current_app, send_file, redirect, url_for, json
from flask_dance.contrib.twitter import make_twitter_blueprint
from flask_cors import CORS
from werkzeug.contrib.fixers import ProxyFix
from flask_restful import Api as API
from flask_cors import CORS
from routes import route_dict
from routes.twitter import twitter_bp
from api import api_bp
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm.exc import NoResultFound
from flask_dance.consumer.backend.sqla import OAuthConsumerMixin, SQLAlchemyBackend
from flask_dance.consumer import oauth_authorized, oauth_error
from flask_caching import Cache
from flask_login import (
    LoginManager, UserMixin, current_user,
    login_required, login_user, logout_user
)

app = Flask(__name__, static_folder='./dist/static')
app.wsgi_app = ProxyFix(app.wsgi_app)

CORS(app)
app.register_blueprint(api_bp)

app.secret_key = "viper-probe2" # change the secret to clear the session!

app.register_blueprint(twitter_bp, url_prefix="/login")

api = API(app)

# DB_URL = os.getenv("POSTGRES_URL")

# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/cabinquest'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

db = SQLAlchemy(app)

cache = Cache(app)

# https://stackoverflow.com/questions/47643448/flask-dance-cannot-get-oauth-token-without-an-associated-user/48718671#48718671

"""
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... other columns as needed

class OAuth(OAuthConsumerMixin, db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    user = db.relationship(User)


# setup login manager
login_manager = LoginManager()
# login_manager.login_view = 'twitter.login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
  

twitter_bp.backend = SQLAlchemyBackend(OAuth, db.session, user=current_user, cache=cache)

# create/login local user on successful OAuth login

@oauth_authorized.connect_via(twitter_bp)
def twitter_logged_in(twitter_bp, token):
    if not token:
        # flash("Failed to log in with {name}".format(name=twitter_bp.name))
        return
    # figure out who the user is
    resp = twitter_bp.session.get("/user")
    if resp.ok:
        username = resp.json()["login"]
        query = User.query.filter_by(username=username)
        try:
            user = query.one()
        except NoResultFound:
            # create a user
            user = User(username=username)
            db.session.add(user)
            db.session.commit()
        login_user(user)
"""

# Add routes from /routes/__init__.py
for route, resource in route_dict.items():
    api.add_resource(resource, route)

# hook up extensions to app
db.init_app(app)
# login_manager.init_app(app)


app.run(host='0.0.0.0')
app.run(port=5000)

# To Run:
# python app.py
# or
# python -m flask app