const express = require('express');
const router = express.Router();

const loginRepository = require('../repositories/login_repository');

router.post('/users', function(req, res) {
    res.send('Wiki home page');
});

router.post('/users/login', async function(req, res) {
    const { username, password } = req.body;
    const apiKey = await loginRepository.login(username, password);
    if (apiKey) {
        res.send(apiKey);
    } else {
        res.send('nono');
    }
});

module.exports = router;
