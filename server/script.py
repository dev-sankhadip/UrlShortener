from flask import Flask, request, jsonify, url_for, redirect
from flask_cors import CORS
from db import Database

db=Database()

app=Flask(__name__)
CORS(app)

@app.route('/shorten', methods=['POST'])
def shorten():
    url = request.get_json().get('url')
    newURl = db.insertURL(url)
    return jsonify({ "newurl":"http://localhost:1234/"+newURl })

@app.route('/<token>', methods=['GET'])
def redirectURL(token):
    original_url = db.getOriginalUrl(token)
    print(original_url[0][1])
    return redirect(original_url[0][1], code=302)

if __name__=="__main__":
    app.run(debug=True, port=1234)