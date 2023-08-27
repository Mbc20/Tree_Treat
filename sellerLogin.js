const express = require('express');

const router=express.Router();

router.get('/sellerLogin', async(req,res)=>{
    res.render('sellerLogin');
});

module.exports = router;