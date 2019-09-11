const express = require('express');
const router = express.Router();

const UserDAO = require('./../../dao/UserDAO');


router.get('/', async (req, res) => {
    let data = await UserDAO.getAllUsers();
    res.json(data);
})

router.post('/', async (req, res, loginData ) => {
    let json = JSON.parse(req.body.loginData)
    let username = json.email
    let password = json.password
    await UserDAO.loginUser(username, password);
    await res.status(201).send();
})


module.exports = router;