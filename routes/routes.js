const usersModel = require('../models/users');

const express = require('express');

const router = express.Router();

router.post('/createUser', (req, res) => {
    const input = req.body;
    //console.log(input);
    const userPattern = /^[a-zA-Z0-9]{4,16}$/;
    const passPattern = /^.{8,16}$/;
    const userResult = userPattern.exec(input.user)[0];
    const passResult = passPattern.exec(input.pass)[0];
    // console.log(userResult);
    // console.log(passResult);
    res.end();
});

module.exports = router;