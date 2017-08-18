const mongoose = require('mongoose');
const config = require('../config/database');

//contact Schema
const ContactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);

module.exports.addContact = function(newContact, callback) {
    //if(err) throw err;
    newContact.save(callback);
};