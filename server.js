var app = require("./config/express");
var port = require("./config/environment/development");
app.listen(port.number);