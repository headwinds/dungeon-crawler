import os
from flask import send_file
from flask_restful import Resource
from flask import Response

class IndexEndPoint(Resource):
    """
    Endpoint for the index which simply gets the index page
    """
    def get(self):
        dist_dir = './dist'
        entry = os.path.join(dist_dir, 'index.html')
        return send_file(entry)
       