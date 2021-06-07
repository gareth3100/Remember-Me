# Face recognition stuff:
from PIL import Image, ImageDraw
import face_recognition
# from PIL import Image
import PIL
import glob
# Flask stuff
from flask import Flask, redirect, url_for, request, abort, jsonify, send_file, render_template, make_response, send_from_directory
import flask
import requests

import json
import sys
import os
import io

# File management
from werkzeug.utils import secure_filename
import base64
import cv2




# base64: https://code.tutsplus.com/tutorials/base64-encoding-and-decoding-using-python--cms-25588 

# Other python_files
# import <filename without py extension>
# to call functions: <filename>.<function_name>
# Custom filepaths:
import face_recognize

# face_recognize.test_print()




# \Users\gfu\Documents\Classes\CSE_115\rFlask\python  
UPLOAD_FOLDER = '/Users/gfu/Documents/Classes/CSE_115/rFlask/python/avatar'
PROFILE_FOLDER = '/Users/gfu/Documents/Classes/CSE_115/rFlask/python/profiles'
RET_IMAGE = '/Users/gfu/Documents/Classes/CSE_115/rFlask/python/avatar/detected.png'
ORIG_IMAGE = '/Users/gfu/Documents/Classes/CSE_115/rFlask/python/avatar/avatar.png'
C_RET_IMAGE = '/Users/gfu/Documents/Classes/CSE_115/rFlask/python/avatar/Compressed_detected.png'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

# possible to just use . or .. instead of the whole path?^^^

# try init as empty list and add more encodings everytime
known_face_names = []
known_face_encodings = []

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROFILE_FOLDER'] = PROFILE_FOLDER
app.config['RET_IMAGE'] = RET_IMAGE
app.config['ORIG_IMAGE'] = ORIG_IMAGE
app.config['C_RET_IMAGE'] = C_RET_IMAGE


#Without any other significant request
@app.route("/")
def home():
    return "WELCOME TO FACE HOME!!!"

@app.route('/favicon.ico')
def favicon():
    # return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')
    return "fuck"

@app.route("/test")
def test():
    return "THIS IS NON-HOME!!!"

def get_base64_encoded_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

@app.route("/face_recognition",  methods=['GET', 'POST','PUT', 'DELETE'])
def face_recognition():
    if request.method == "POST":
        print("RECEIVED REQUEST!!!")
        file_name = 'IMAGE!!!'
        data_raw = request.data
        data_args = request.args
        data_form = request.form
        # Images are in these areas as follows:
        # Also this is a dictionary
        data_files = request.files
        image = data_files[file_name]# here, 'image' is the 'file'
        secure_file_name = secure_filename(image.filename)
        # Save image to profiles
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_file_name))
        face_locations, recognized_faces = face_recognize.recognize_image(image, known_face_names, known_face_encodings)
        print("FACE LOCATIONS: ", face_locations)
        # get image:
        # ret_64 = get_base64_encoded_image(app.config['RET_IMAGE'])
        message = jsonify({
                            "Content-Type" : "multipart/form-data",
                            "error":"None",
                            "message":"View retrieved successfully",
                            "view": "temporary",
                            "ret_64_img": "really long string",


                            "recognized_faces": recognized_faces
                        })
        code = 200
        return message, code
    elif request.method == "GET":
        return send_file(app.config['RET_IMAGE'], download_name= "return.png")

@app.route("/return.png",  methods=['GET', 'POST', 'PUT', 'DELETE'])
def recognized_image():
    print()
    print("RETURNING RECOGNIZED IMAGE!?!?!?!?")
    print()
    if(request.args.get('time', '')):
        print("returning Photo from: ", request.args.get('time', ''))

    return send_file(app.config['RET_IMAGE'], mimetype='image/png')


@app.route("/orig.png",  methods=['GET', 'POST', 'PUT', 'DELETE'])
def orig_image():
    print("RETURNING ORIGINAL IMAGE!?!?!?!?")
    if(request.args.get('time', '')):
        print("returning Photo from: ", request.args.get('time', ''))

    return send_file(app.config['ORIG_IMAGE'], mimetype='image/png')

@app.route("/face_new",  methods=['GET', 'POST', 'PUT', 'DELETE'])
def face_new():
    #Handle BOTH old and new faces?
    # HANDLING NEW FACE!!!
    print("HANDLING NEW FACE!!!")
    # data_raw = request.data
    # data_args = request.args
    # data_json = request.json
    # form has newName and files has newFace
    data_form = request.form
    data_files = request.files

    newName = data_form["newName"]
    new_image = data_files["newFace"]
    newFaceFilename = newName + ".jpg"
    new_image.save(os.path.join(app.config['PROFILE_FOLDER'], newFaceFilename))
    # Update existing face vectors:
    update_faceVectors()
    # WARNING! THIS DOES NOT ACCOUNT FOR FILE OVERWRITING/ OUTDATED MODTIMES
    message = jsonify({
                        "Content-Type" : "multipart/form-data",
                        "error":"None",
                        "message":"New Face Saved Successfully"
                        })
    code = 200    
    return message, code

@app.route("/face_remove",  methods=['GET', 'POST', 'PUT', 'DELETE'])
def face_remove():
    #Handle BOTH old and new faces?
    # HANDLING NEW FACE!!!
    print("REMOVING OLD FACE!!!")
    data_form = request.form
    data_files = request.files

    # change this to get oldname to remove
    remName = data_form["remName"]

    rem_list = []
    # Remove the appropriate one:
    for subdir, dirs, files in os.walk('.\profiles'):
        # iterate through files
        for file in files:
            #print os.path.join(subdir, file)
            filepath = subdir + os.sep + file
            # For now assume we have only picture files. add base case later
            name = os.path.splitext(file)[0]

            if name == remName:
                # print("REMOVING: ", filepath)
                rem_list.append(filepath)
    
    for dic in rem_list:
        os.remove(dic)
        print(dic, " has been removed successfully")
    
    update_faceVectors()
    # WARNING! THIS DOES NOT ACCOUNT FOR FILE OVERWRITING/ OUTDATED MODTIMES
    message = jsonify({
                        "Content-Type" : "multipart/form-data",
                        "error":"None",
                        "message":"Old Face of " + str(remName) + " removed!"
                        })
    code = 200    
    return message, code

def update_faceVectors():
    # declare global variables:
    global known_face_names
    global known_face_encodings

    names, encodings = face_recognize.get_encodings()
    known_face_names = names.copy()
    known_face_encodings = encodings.copy()
    for dic in known_face_names:
        print("have training for: ", dic)
    print("num encodings: ", len(known_face_encodings))

if __name__== "__main__":
    # app.run()
    # Init face_encodings.
    # add_encodings()


    # known_face_names = []
    # known_face_encodings = []


    # names, encodings = face_recognize.get_encodings()
    # known_face_names = names.copy()
    # known_face_encodings = encodings.copy()
    # for dic in known_face_names:
    #     print("have training for: ", dic)

    update_faceVectors()

    # app.run(host='10.0.1.9', threaded=False)
    app.run(host='10.0.1.9', threaded=True)
    # app.run(host='192.168.0.70')


