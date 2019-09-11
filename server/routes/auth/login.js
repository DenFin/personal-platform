const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserDAO = require('./../../dao/UserDAO');



    router.post('/', passport.authenticate('local-login'), userResponse);

    
    module.exports = router;


