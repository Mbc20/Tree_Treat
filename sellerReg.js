const express = require('express');

const router=express.Router();

router.get('/sellerReg', async(req,res)=>{
    res.render('sellerReg');
});

module.exports = router;