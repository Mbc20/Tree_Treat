const express = require('express');

const router=express.Router();

router.get('/homePage', async(req,res)=>{
    res.render('homePage');
});

module.exports = router;