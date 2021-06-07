import requests
import threading
import json
import os
addr = "localhost:8082"
addr2 = "localhost:8083"
addr3 = "localhost:8084"
tdata = { "id": 2, "value": True }
version = "V1"

addr_r = "http://pngimg.com/uploads/dreamcatcher/dreamcatcher_PNG31.png"
addr_my = "http://10.0.1.9:5000/return.png"

# store-vew:
print("TRYING GET on my_image:")
try:
    response = requests.get(addr_my)
    print(version ," Transmit has succeeded; message: ", response)

except:
    print(version, " Transmit has failed")
print("got response: ", response)
# responseInJson = response.json()
# print("v1 JSON: ", responseInJson)
print("reponse?: ", response.headers)


print("TRYING GET on reg_image:")
try:
    response = requests.get(addr_r)
    print(version ," Transmit has succeeded; message: ", response)

except:
    print(version, " Transmit has failed")
print("got response: ", response)
print("reponse?: ", response.headers)

# print("TRYING PUT:")
# try:
#     response = requests.put('http://'+ addr +'/key-value-store-view/', data = tdata , timeout = 3)
#     print(version ," Transmit to :", addr, " has succeeded; message: ", response)
#     status = 1
# except:
#     print(version, " Transmit to :", addr, " has failed")
#     status = 0

# print("v2 JSON: ", responseInJson)

# print("TRYING PUT:")
# tdata = {"value":"value1"}
# try:
    
#     response = requests.put('http://'+ addr +'/key-value-store/key1', json = tdata , timeout = 10)
#     print(version ," Transmit to :", addr, " has succeeded; message: ", response)
# except:
#     print(version, " Transmit to :", addr, " has failed")
    
# Normal:
# print("TRYING GET:")
# try:
#     response = requests.get('http://'+ addr +'/key-value-store/key1', json={'causal-metadata':[0,0,0]})
#     print(version ," Transmit to :", addr, " has succeeded; message: ", response)
#     status = 1
# except:
#     print(version, " Transmit to :", addr, " has failed")
#     status = 0
# responseInJson = response.json()
# print("v1 JSON: ", responseInJson)