import os
from dotenv import load_dotenv
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
from flask_dance.consumer.backend.sqla import OAuthConsumerMixin, SQLAlchemyBackend


load_dotenv()

app = Flask(__name__)

app = Flask(__name__, static_folder='./dist/static')
app.wsgi_app = ProxyFix(app.wsgi_app)

CORS(app)
app.register_blueprint(api_bp)

app.secret_key = "viper-probe3" # change the secret to clear the session!

app.register_blueprint(twitter_bp, url_prefix="/login")

db = SQLAlchemy()
# class OAuth(db.Model, OAuthConsumerMixin):
#    pass

# twitter_bp.backend = SQLAlchemyBackend(OAuth, db.session)    

POSTGRES_URL = os.getenv("POSTGRES_URL")

my_heroku_connection=POSTGRES_URL
engine = db.create_engine(my_heroku_connection)
connection = engine.connect()
metadata = db.MetaData()
social = db.Table('social', metadata, autoload=True, autoload_with=engine)
print("app.py - connected to heroku column names: ", social.columns.keys())

api = API(app)

# Add routes from /routes/__init__.py
for route, resource in route_dict.items():
    api.add_resource(resource, route)

app.run(host='0.0.0.0')
app.run(port=5000)

# To Run:
# python app.py
# or
# python -m flask app
