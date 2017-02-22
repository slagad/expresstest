var express = require("express");
var logFunction = require("./logs");
var app = express();
app.set('view engine', 'ejs');
app.use(logFunction);
require("../app/index_route/index")(app);
require("../app/login_route/login")(app);
require("../app/home_route/home")(app);
module.exports = app;