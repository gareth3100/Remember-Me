# File management
from werkzeug.utils import secure_filename
import base64
import cv2
import numpy as np

# Face recognition stuff:
from PIL import Image, ImageDraw, ImageFont
import face_recognition

# file management:
import sys
import os
import json

known_names = []
known_encodings = []


def test_print():
    print("TESTING SUBFUNCT!!!!")

def get_encodings():
    encodings = []
    names = []
    f = open('data.json',)
    data = json.load(f)
    file_names = []
    names_to_remove = []

    for subdir, dirs, files in os.walk('.\profiles'):
        # iterate through files
        for file in files:
            name = os.path.splitext(file)[0]
            file_names.append(name)
    
    for dic in data:
        if dic not in file_names:
            print("Removing: ", dic, "From Json")
            names_to_remove.append(dic)
    for dic in names_to_remove:
        del data[dic]
    # Note: for now try to restrict each photo in profiles to a single person
    for subdir, dirs, files in os.walk('.\profiles'):
        # iterate through files
        for file in files:
            #print os.path.join(subdir, file)
            filepath = subdir + os.sep + file
            # For now assume we have only picture files. add base case later
            name = os.path.splitext(file)[0]

            # if it is not in saved encodings
            if name not in data:
                print("Training: ", name)
                names.append(name)
                curr_image = face_recognition.load_image_file(filepath) #already inside profiles
                curr_encoding = face_recognition.face_encodings(curr_image)[0] #recognize first face?
                encodings.append(curr_encoding)

                # Also save to json file as a regular list
                data[name] = list(curr_encoding)
            else:
                # it is already in there
                print("Pulling from Json: ", name)
                # saved as list so we must convert back into numpy array
                curr_encoding = np.array(data[name])
                encodings.append(curr_encoding)
                names.append(name)
        
    with open('data.json', 'w') as outputFile:
        json.dump(data, outputFile)
    f.close()
    
    return names, encodings


def detect_faces():
    # print("UNIMPLEMENTED!!!")
    print("Begining facial detection")
    path = "./avatar/avatar.png"
    image_f = face_recognition.load_image_file("./avatar/avatar.png")
    face_locations = face_recognition.face_locations(image_f)
    print("Completed facial detection")
    face_encodings = face_recognition.face_encodings(image_f, face_locations)


    pil_image = Image.fromarray(image_f)
    draw = ImageDraw.Draw(pil_image)

    image_c = cv2.imread(path)
    fontsize = 50
    font = ImageFont.truetype("arial.ttf", fontsize)
    # Loop through faces in test image
    for(top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        # matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        name = "Unknown Person"
        # Draw box
        draw.rectangle(((left, top), (right, bottom)), outline=(255,255,0))
        # Draw label
        text_width, text_height = draw.textsize(name)
        

        text_height = text_height*4
        # print("width: ", text_width, "height: ", text_height)

        draw.rectangle(((left,bottom - text_height - 20), (right, bottom)), fill=(255,255,0), outline=(255,255,0))
        draw.text((left + 6, bottom - text_height - 10), name, font=font, fill=(0,0,0))

        # CV2
        # top *= 4
        # right *= 4
        # bottom *= 4
        # left *= 4

        # # Draw a box around the face
        # cv2.rectangle(image_c, (left, top), (right, bottom), (0, 0, 255), 2)

        # # Draw a label with a name below the face
        # cv2.rectangle(image_c, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        # font = cv2.FONT_HERSHEY_DUPLEX
        # cv2.putText(image_c, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)



    del draw
    # Display image
    pil_image.show()
    # Save image
    pil_image.save('./avatar/detected.png')

    # Cv2:
    # cv2.imwrite('./avatar/detected.png', image_c)
    # cv2.imshow('Video', image_c)
    # cv2.waitKey(0)

    return face_locations

def best_match (face_encoding, known_face_encodings):
    # Note, they are all already np arrays of size 128
    diff_list = []
    # min_diff_index = 0

    for dic in known_face_encodings:

        diff_value = 0
        diff = face_encoding - dic
        
        for dicc in np.absolute(diff):
            diff_value = diff_value + dicc
        diff_list.append(diff_value)

    return diff_list


def recognize_image(image, known_face_names, known_face_encodings):
    recognized_faces = []

    print("Begining facial detection")
    image_f = face_recognition.load_image_file("./avatar/avatar.png")
    face_locations = face_recognition.face_locations(image_f)
    print("Completed facial detection")
    print("Known Names: ", known_face_names)
    face_encodings = face_recognition.face_encodings(image_f, face_locations)

    # Convert to PIL format
    pil_image = Image.fromarray(image_f)

    # Create a ImageDraw instance
    draw = ImageDraw.Draw(pil_image)
    fontsize = 50
    font = ImageFont.truetype("arial.ttf", fontsize)

    # Loop through faces in test image
    for(top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        # matches is list of boolean values representing which faces in known_face_encodings the current is "familiar" with
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding) 
        # print("What is face encodings?: ", face_encoding)
        print("What is matches :???: ", matches)
        # print("is encodings a numpy array?: ", type(face_encoding) )
        #Note: face_encoding is a numpy array of size (128,) 
        name = "Unknown Person"
        diff_list = best_match (face_encoding, known_face_encodings)
        print("Differences: ", diff_list)
        # find index with minimum difference
        min_index = 0
        print("Min_VAl?: ", min_index)
        min_val = diff_list[min_index]
        # find index with minimum
        for dic in range(len(diff_list)):
            if diff_list[dic] < min_val:
                min_index = dic
                min_val = diff_list[dic]
        # only if numpy also says its "similar" 
        # and make sure the diff is at least 4.4 or under
        #  and (min_val <= 4.4)
        min_threshold = 10
        # if(matches[min_index]):
            # name = known_face_names[min_index]
        if(matches[min_index]) and (min_val <= min_threshold):
            name = known_face_names[min_index]

        if name != "Unknown Person" and name not in recognized_faces:
            recognized_faces.append(name)
        print("WE HAVE RECOGNIZED: ", name)
        print("With diff_value: ", min_val)

        # Draw box
        draw.rectangle(((left, top), (right, bottom)), outline=(255,255,0))
        # Draw label
        text_width, text_height = draw.textsize(name)
        text_height = text_height*4
        draw.rectangle(((left,bottom - text_height - 10), (right, bottom)), fill=(255,255,0), outline=(255,255,0))
        draw.text((left + 6, bottom - text_height - 5), name, font=font, fill=(0,0,0))
        # draw.text((5, 5), name, fill=(0,0,0))

    del draw

    # Uncomment to Display image:
    # pil_image.show()

    # Save image
    pil_image.save('./avatar/detected.png')
    print("\n\n\n\n\n")
    return face_locations, recognized_faces

if __name__== "__main__":
    # app.run()
    # Init face_encodings.
    # known_names = []
    # known_encodings = []    
    names, encodings = get_encodings()
    known_names = names.copy()
    known_encodings = encodings.copy()

    for dic in known_names:
        print("we have training for:", dic)
