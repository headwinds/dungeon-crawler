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

app = Flask(__name__)

app = Flask(__name__, static_folder='./dist/static')
app.wsgi_app = ProxyFix(app.wsgi_app)

CORS(app)
app.register_blueprint(api_bp)

app.secret_key = "viper-probe2" # change the secret to clear the session!

app.register_blueprint(twitter_bp, url_prefix="/login")

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
