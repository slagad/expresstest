var homeCntr = require("./homeController");
module.exports = function(app) {
    app.get("/home.html", homeCntr.homeFunction);
    app.post("/home.html", homeCntr.homeUserDetails);
}