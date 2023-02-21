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
                    const updatedData = { user: input.user };
                    console.log(clip[0].clip1);
                    updatedData.clip1 = clip[0].clip1;
                    updatedData.clip2 = clip[0].clip2;
                    updatedData.clip3 = clip[0].clip3;
                    updatedData.clip4 = clip[0].clip4;
                    updatedData.clip5 = clip[0].clip5;
                    updatedData.clip6 = clip[0].clip6;
                    updatedData.clip7 = clip[0].clip7;
                    updatedData.clip8 = clip[0].clip8;
                    updatedData.clip9 = clip[0].clip9;
                    updatedData.clip10 = clip[0].clip10;
                    if (clipResult[0] == 'clip1') {
                        updatedData.clip1 = input.clip1;
                    }
                    if (clipResult[0] == 'clip2') {
                        updatedData.clip2 = input.clip2;
                    }
                    if (clipResult[0] == 'clip3') {
                        updatedData.clip3 = input.clip3;
                    }
                    if (clipResult[0] == 'clip4') {
                        updatedData.clip4 = input.clip4;
                    }
                    if (clipResult[0] == 'clip5') {
                        updatedData.clip5 = input.clip5;
                    }
                    if (clipResult[0] == 'clip6') {
                        updatedData.clip6 = input.clip6;
                    }
                    if (clipResult[0] == 'clip7') {
                        updatedData.clip7 = input.clip7;
                    }
                    if (clipResult[0] == 'clip8') {
                        updatedData.clip8 = input.clip8;
                    }
                    if (clipResult[0] == 'clip9') {
                        updatedData.clip9 = input.clip9;
                    }
                    if (clipResult[0] == 'clip10') {
                        updatedData.clip10 = input.clip10;
                    }
                    const options = {
                        new: false
                    };
                    try {
                        const result = await clipModel.findOneAndUpdate({ user: updatedData.user }, updatedData, options);
                    } catch (error) {
                        console.log(error);
                    }
                    console.log(updatedData);
                    res.send({ message: 'clip saved' });
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
});

module.exports = router;