const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        "msg" : "note get route"
    })
})

module.exports = router;