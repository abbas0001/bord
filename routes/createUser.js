const userModel = require('../models/users');
const clipModel = require('../models/clips');

const express = require('express');

const router = express.Router();

router.post('/createUser', async (req, res) => {
    let input = '';
    const error = [];
    input = req.body.toString();
    input = input.replace(/\\/g, '\\\\');
    try { input = JSON.parse(input); } catch (error) {
        res.send({ error: 'bad json' });
        return;
    }
    if (input.user == null) {
        error.push('no user value');
    }
    if (input.pass == null) {
        error.push('no pass value');
    }
    if (error.length > 0) {
        res.send({ error: error });
        return;
    }
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
        res.send({ error: error });
    } else {
        try {
            const searchUser = await userModel.find({ user: input.user });
            if (searchUser.length > 0) {
                res.send({ message: 'user exists' });
            } else {
                const user = new userModel({
                    user: input.user,
                    pass: input.pass
                });
                const clip = new clipModel({
                    user: input.user,
                    clip1: "",
                    clip2: "",
                    clip3: "",
                    clip4: "",
                    clip5: "",
                    clip6: "",
                    clip7: "",
                    clip8: "",
                    clip9: "",
                    clip10: ""
                });
                try {
                    let dataToSave = await user.save();
                    dataToSave = await clip.save();
                    res.send({
                        message: 'user created'
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
});

module.exports = router;