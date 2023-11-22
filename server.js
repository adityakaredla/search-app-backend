const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'data.json');
const rawData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

const {inclusionSearch} = require('./inclusionSearch');
const {strictInclusiveSearch} = require('./strictInclusivesearch');

app = express();
app.use(cors());

app.get('/searchInclusive/:input',(request, response) =>{
    const input = request.params.input;
    let searchData = [];

    if(input === 'totalData'){
        searchData = rawData;
    }

    else{
        for(const data of rawData){
            if(inclusionSearch(data,input)){
                searchData.push(data);
            }
        }
    }

    response.json(searchData);
});


app.listen(4000,() => {
    console.log('Server Running!!');
});