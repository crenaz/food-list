var express = require("express");

var app = express();

const port = process.env.port || 3000

app.use(require("./controllers/index"));
app.use(require("./controllers/test"));

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} node.`);
});
