const userModel = require('../models/users');
const clipModel = require('../models/clips');

const express = require('express');

const router = express.Router();

router.post('/set', async (req, res) => {
    let input = '';
    const error = [];
    input = req.body.toString();
    input = input.replace(/\\/g, '\\\\');
    try { input = JSON.parse(input); } catch (error) {
        res.send({ error: 'bad json' });
        return;
    }
    const keys = Object.keys(input);
    if (keys.length > 2) {
        res.send({ error: 'only two key value is valid' });
    } else {
        if (keys.includes('user')) {
            const clipPattern = /(^clip[1-9]{1}$|^clip10$)/;
            const clipResult = clipPattern.exec(keys[1]);
            if (clipResult != null) {
                const user = await userModel.find({ user: input.user });
                if (user.length != 0) {
                    const clip = await clipModel.find({ user: input.user });
                    console.log(clip);
                } else {
                    res.send({ error: 'user not found' });
                }
            } else {
                res.send({ error: 'invalid clip' });
            }
        } else {
            res.send({ error: 'cannot find user key value' });
        }
    }
    // if (keys.length > 1) {
    //     res.send({ error: 'only one argument is valid' });
    //     return;
    // }
    // const keysPattern = /(^clip[1-9]{1}$|^clip10$)/;
    // const keysResult = keysPattern.exec(keys[0]);
    // if (keysResult != null) {
    //     const keysPattern = /([1-9]{1}|10)$/;
    //     const keysResult = keysPattern.exec(keys[0]);

    //     res.end();
    // } else {
    //     res.send({ error: 'invalid clip' });
    // }
});

module.exports = router;