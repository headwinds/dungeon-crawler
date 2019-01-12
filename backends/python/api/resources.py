"""
REST API Resource Routing
http://flask-restplus.readthedocs.io
"""

from datetime import datetime
import requests
from flask import request, Response
from flask_restplus import Resource
from .security import require_auth
from . import api_rest


class SecureResource(Resource):
    """ Calls require_auth decorator on all requests """
    method_decorators = [require_auth]


@api_rest.route('/resource/<string:resource_id>')
class ResourceOne(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        timestamp = datetime.utcnow().isoformat()
        return {'timestamp': timestamp}

    def post(self, resource_id):
        json_payload = request.json
        return {'timestamp': json_payload}, 201



@api_rest.route('/resource/cabinquest/<string:resource_id>')
class ResourceCabinQuest(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        url = "https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss";
        r = requests.get(url)
        return Response(
            r.content,
            status=r.status_code,
            content_type=r.headers['content-type'],
        )

@api_rest.route('/secure-resource/<string:resource_id>')
class SecureResourceOne(SecureResource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        timestamp = datetime.utcnow().isoformat()
        return {'timestamp': timestamp}
