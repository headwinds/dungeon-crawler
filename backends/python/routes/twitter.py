import os
import json
from flask import send_file
from flask_restful import Resource
from flask import Response, redirect, url_for
from libraries.responds import respond

from flask_dance.contrib.twitter import make_twitter_blueprint, twitter

consumer_key=os.getenv('FLASK_TWITTER_KEY')
consumer_secret=os.getenv('FLASK_TWITTER_SECRET')

twitter_bp = make_twitter_blueprint(
    api_key=os.getenv('FLASK_TWITTER_KEY'),
    api_secret=os.getenv('FLASK_TWITTER_SECRET'),
)

class TwitterEndPoint(Resource):
    """
    Endpoint for the twiiter auth 
    """
    
    def get(self):
        if not twitter.authorized:
            return redirect(url_for("twitter.login"))

        resp = twitter.get("account/settings.json")
            
        if resp.ok:
            # return "You are @{screen_name} on Twitter".format(screen_name=resp.json()["screen_name"])
            # return resp.json()
            data = resp.json()
            return Response(
                json.dumps(data),
                status=200,
                content_type='application/json',
            )
        else:
            return 'Please report a login issue here https://github.com/headwinds/hoth/issues'   
