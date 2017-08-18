const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Contact= require('../models/contact');


router.post('/addContact',function (req,res,next) {
    const newContact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        comment: req.body.comment
    });

    Contact.addContact(newContact,function (err,contact) {
        if(err){
            res.json({success:false,msg:'failed to add Contact'});
        }else {
            res.json({success:true,msg:'Contact Saved'})
        }
    });

});


module.exports = router;
