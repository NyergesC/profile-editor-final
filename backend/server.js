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

app.post('/', (req, res) => {
    const picture = req.files.picture;
    const answer = {}
    const file = JSON.stringify(req.body, null, 2);
    const uploadPath = __dirname + '/../backend/data/' + `profile.json`;
    
    const uploads = path.join(`${__dirname}/../frontend/`);
    if(picture) {
        picture.mv(uploads + picture.name)
    }
    answer.pictureName = picture.name
    res.send(answer)

    fs.writeFileSync(uploadPath, file, err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    })
    res.send({response: "sikeres feltöltés"});
});

/* app.delete('/', (req,res) =>{
    const picture = req.files.picture
    const datas = JSON.stringify(req.body, null, 2);

    const filterProfile = datas.filter(data => data.surname === '')

 
}) */

/* let jsonData = []

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
 */


const port = 9000;

app.listen(port, ()=>{
    console.log(`htttp://127.0.0.1:${port}`);
})
