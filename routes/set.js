const { json } = require('express');
const express = require('express');

const router = express.Router();

router.post('/set', (req, res) => {
    let input = '';
    const error = [];
    input = req.body.toString();
    input = input.replace(/\\/g, '\\\\');
    try { input = JSON.parse(input); } catch (error) {
        res.send({ error: 'bad json' });
        return;
    }
    const keys = Object.keys(input);
    if (keys.length > 1) {
        res.send({ error: 'only one argument is valid' });
        return;
    }
    const keysPattern = /(^clip[1-9]{1}$|^clip10$)/;
    const keysResult = keysPattern.exec(keys[0]);
    if (keysResult != null) {
        const keysPattern = /([1-9]{1}|10)$/;
        const keysResult = keysPattern.exec(keys[0]);
        console.log(keysResult);
        res.end();
    } else {
        res.send({ error: 'invalid clip' });
    }
});

module.exports = router;