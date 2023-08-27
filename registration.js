const express = require('express');

const router=express.Router();

router.get('/registration', async(req,res)=>{
    res.render('registration');
});

module.exports = router;
