import json
from flask import Flask , jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

with open("data.json",'r') as data:
    rawData = json.load(data)

def inclusionSearch(dataDict,input):
    for key in dataDict.keys():
        if isinstance(dataDict[key],str) and (str(input) in str(dataDict[key])): return True
        if isinstance(dataDict[key],int) and (str(input) in str(dataDict[key])) : return True
        if isinstance(dataDict[key],dict): return inclusionSearch(dataDict=dataDict,input=input)


@app.route('/search/<input>',methods=['GET'])
def get_data(input):
    searchData = []
    if input == "totalData": searchData = rawData
    else : 
        for data in rawData:
            if inclusionSearch(data,input) : searchData.append(data)
    return jsonify(searchData)
            


if __name__ == '__main__':
    app.run(port=4000,debug=True)