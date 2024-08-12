const express = require('express');
const app = express();
require('dotenv').config();

const bodyparser = require('body parser');
app.use(bodyparser.json()); //req.body
const PORT = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('listening on port 3000');
})

