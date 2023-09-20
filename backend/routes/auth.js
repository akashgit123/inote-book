const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/',[
    body('name').isLength({min:5}).withMessage('Enter a valid name (have to contain atleast 5 characters)'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Enter the password with minimun five characters')
    ],
    async(req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
        let user = await User.find({email:req.body.email});
        if(user.length > 0){
            return res.json({message:"This email already exists.. Try again"});
        }
        else{
            const salt =await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(req.body.password,salt);
            User.create({
                name:req.body.name,
                email:req.body.email,
                password:securedPassword,
            })
            .then((user)=>{
                res.json(user);
            })
            .catch((err)=>{
                res.json({message:"Something went wrong"});
            })
        }
    }
    else{
        return res.send({ errors: result.array() }).status(400);
    } 
})

module.exports = router;