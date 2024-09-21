from flask import Flask, request
import os
import subprocess

app = Flask(__name__)

@app.route("/ghAPI", methods=['POST'])
def webhook():
    if request.method == 'POST':
        subprocess.call(['sh', '../update.sh']) # in the futrure check if its from a push to main

def create_app():
   return app
