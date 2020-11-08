const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const usersController = require('./controllers/users_controller');
app.use(usersController);

const server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
