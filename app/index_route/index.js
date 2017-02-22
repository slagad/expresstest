var indexCntr = require("./indexController");

module.exports = function(app) {
    app.get("/index.html", indexCntr.indexFunction);
}