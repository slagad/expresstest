module.exports = function(req, res, next) {
    console.log("Request apper with url: " + req.ip);
    next();
    console.log("Request exit with url: " + req.originalUrl);
}