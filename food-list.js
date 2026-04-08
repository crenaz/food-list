var express = require("express");

var app = express();

const port = process.env.PORT || 3000;

app.use(require("./controllers/index"));
app.use(require("./controllers/test"));

app.listen(port, () => {
  console.log(`Server started on PORT:${port} in ${process.env.NODE_ENV} node.`);
});
