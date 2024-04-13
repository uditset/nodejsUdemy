const express = require('express');
const path = require('path');
const router = express.Router();
const viewsPath = path.join(__dirname,'..','views','pageNotFound.html');

router.get('*',(_,resp)=>{
    resp.status(404).sendFile(viewsPath);
})

module.exports = router;