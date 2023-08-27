const express = require('express');

const router=express.Router();

router.get('/buyerLogin', async(req,res)=>{
    res.render('buyerLogin');
});

module.exports = router;



