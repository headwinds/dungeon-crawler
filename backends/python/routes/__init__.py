from routes.index import (
    IndexEndPoint,
)

from routes.twitter import (
    TwitterEndPoint,
)

route_dict = {
    "/": IndexEndPoint,
    "/api/twitter/auth": TwitterEndPoint, 
}