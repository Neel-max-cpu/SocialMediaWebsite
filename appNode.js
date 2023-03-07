// MOONGOOSE-----

// Step 1 - set up express & mongoose

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 3000;

var fs = require('fs');
var path = require('path');
require('dotenv/config');

const dbURL = "mongodb+srv://test:test1234@itzhippy.1iq2irx.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
    "mongodb+srv://test:test1234@itzhippy.1iq2irx.mongodb.net/?retryWrites=true&w=majority"
)

.then(()=> console.log('db is connected'))
.catch((err) => console.log(err,"it has error"));

app.get("/",(req,res)=>{
    res.send("upload file");
});


app.listen(port, ()=>{
    console.log("running");
})