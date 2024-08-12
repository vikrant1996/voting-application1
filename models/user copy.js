const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const { isNumberObject } = require('util/types');
const { stringify } = require('querystring');

// Define the Person schema

const userSchema = new mongoose. Schema ({

name: {

type: String,

required: true

},
age: {
    type: Number,
    
},
email:{
    type: string
},
mobile:{
    type: string
    required: true

},
address:{
    type: string
    required: true
},aadhare card number:{
    type: Number
    required: true

},


});

const userschema = mongoose.model('user',mongoose.userSchema);
model.exports = user;