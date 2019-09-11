const express = require('express');
const router = express.Router();
const UserDAO = require('./../../dao/UserDAO');



    router.post('/', async (req, res) => {
        console.log("THIS IS THE auth/login route");
        let loginData = req.body
        console.log(loginData)
    })

    
    module.exports = router;


