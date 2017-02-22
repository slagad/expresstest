var loginCntr = require("./loginController");
module.exports = function(app) {

    app.get("/login.html", loginCntr.loginFunction);

}