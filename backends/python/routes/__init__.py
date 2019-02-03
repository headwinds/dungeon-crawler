from routes.index import (
    IndexEndPoint,
)

from routes.twitter import (
    TwitterEndPoint,
)

from routes.shadowhunters import (
    SaveEndPoint,
    LoadEndPoint
)

route_dict = {
    "/": IndexEndPoint,
    "/api/twitter/auth": TwitterEndPoint, 
    "/api/shadowhunters/save": SaveEndPoint, 
    "/api/shadowhunters/load": LoadEndPoint, 
}