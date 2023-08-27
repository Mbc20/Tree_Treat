const express = require('express');

const router=express.Router();

router.get('/buyerReg', async(req,res)=>{
    res.render('buyerReg');
});

module.exports = router;