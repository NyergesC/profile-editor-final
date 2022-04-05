const express = require("express");
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload')


const app = express();

app.use(fileUpload())

app.get('/', (req,resp,next)=>{   
    resp.sendFile(path.join(`${__dirname}/../frontend/index.html`));
})

app.use('/public', express.static(`${__dirname}/../frontend/public`));

const dataLocation = path.join(`${__dirname}/../frontend/`)

//POST METHOD

let jsonData = []

app.post('/', (req, res) =>{
    const formData = req.body

    jsonData.push(formData)
    console.log(formData);

     fs.writeFile(`${dataLocation}profile.json`, JSON.stringify(jsonData), (error)=>{
         if(error){
             console.log('igy jartal')
         }
     })      
})



const port = 9000;

app.listen(port, ()=>{
    console.log(`htttp://127.0.0.1:${port}`);
})
