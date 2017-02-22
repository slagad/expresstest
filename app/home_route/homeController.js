var homeCntr = {};

homeCntr.homeFunction = function(req, res) {
    res.render("home");
}

homeCntr.homeUserDetails = function(req, res) {
    res.render("user/userDetails", { data: req.body });
};

module.exports = homeCntr;