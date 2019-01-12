def respond(code=200, **kwargs):
    return dict(**kwargs), code, {
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    }
