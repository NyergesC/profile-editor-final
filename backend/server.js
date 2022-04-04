const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req,resp,next)=>{   
    resp.sendFile(path.join(`${__dirname}/../frontend/index.html`));
})
 
app.use('/public', express.static(`${__dirname}/../frontend/public`));



const port = 9000;

app.listen(port, ()=>{
    console.log(`htttp://127.0.0.1:${port}`);
})
