var express = require('express');

var app = express();

app.use(require('./controllers/index'));
app.use(require('./controllers/test'));

app.listen(process.env.PORT);