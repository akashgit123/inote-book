const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');

router.post('/',[
    body('name').isLength({min:5}).withMessage('Enter a valid name'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Enter the password with minimun five characters')
    ],
    (req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        .then((user)=>{
            res.json(user);
        })
        .catch((err)=>{
            res.json({message:"Enter a valid email, duplicate email are not allowed"});
        })
    }
    else{
        return res.send({ errors: result.array() }).status(400);
    } 
})

module.exports = router;