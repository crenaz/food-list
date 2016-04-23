var express = require('express');

var app = express();

app.use(require('./controllers/index'));

app.listen(process.env.PORT);