const userModel = require('../models/users');

const express = require('express');

const router = express.Router();

router.post('/createUser', async (req, res) => {
    let input = '';
    const error = [];
    input = req.body.toString();
    input = input.replace(/\\/g, '\\\\');
    input = JSON.parse(input);
    const userPattern = /^[a-zA-Z0-9]{4,16}$/;
    const passPattern = /^.{8,16}$/;
    const userResult = userPattern.exec(input.user);
    const passResult = passPattern.exec(input.pass);
    if (userResult == null) {
        error.push('bad user');
    } else {
    }
    if (passResult == null) {
        error.push('bad pass');
    } else {
    }
    if (error.length > 0) {
        res.send({ 'error': error });
    } else {
        const user = new userModel({
            user: input.user,
            pass: input.pass
        });
        try {
            const dataToSave = await user.save();
            res.send({
                message: 'user created'
            });
        } catch (error) {
            console.log(error);
        }
    }
});

module.exports = router;