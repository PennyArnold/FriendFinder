var path = require("path");

module.exports = function (app) {
    app.get("/survey", function (req,res) {
        res.sendFile(path.join(_FriendFinder + "/../public/survey.html"));
    });
    app.use(function (req,res) {
        res.sendFile(path.join(_FriendFinder + "/../public/home.html"));
    });
}