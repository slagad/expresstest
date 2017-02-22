var indexCntr = {};

indexCntr.indexFunction = function(req, res) {
    res.render("index", { name: "sachin" });
};

module.exports = indexCntr;