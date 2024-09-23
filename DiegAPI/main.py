from flask import Flask, request, Response
import json
from ghapi.repos import Repository


app = Flask(__name__)

@app.route('/GHidData', methods=['POST'])
def GHidData():
   if request.method != 'POST':
      resp = Response('{"msg": "Error: expected POST request only!"}', 405)
      resp.headers['Access-Control-Allow-Origin'] = '*'
      resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, Origin, Accept'
      return resp
   data = json.loads(request.data)
   if "GHid" not in data:
      resp = Response('{"msg": "Error: GHid variable required!"}', 400)
      resp.headers['Access-Control-Allow-Origin'] = '*'
      resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, Origin, Accept'
      return resp
   repo = Repository('dygo454', data["GHid"])
   try:
      info = repo.get_info()
   except:
      resp = Response('{"msg": "Error: GHid variable did not point to a valid repo!"}', 400)
      resp.headers['Access-Control-Allow-Origin'] = '*'
      resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, Origin, Accept'
      return resp
   desc = info['description']
   status = "Status: N/A" # temporary will use ghapi more in the future

   resp = Response('{"title": "'+data["GHid"]+'", "desc": "'+desc+'", "status": "'+status+'"}', 200)
   resp.headers['Access-Control-Allow-Origin'] = '*'
   resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, Origin, Accept'
   return resp


def create_app():
   return app

if __name__=="__main__":
   app.run()