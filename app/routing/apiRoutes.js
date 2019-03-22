//Requirements
var friends = require("../data/friends.js");

//api get requests
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    //post request
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //getting the data posted by user as a part of survey
        var userData = req.body;
        var userScores = userData.scores;

        //console log for debugging
        console.log("userData", userData);
        console.log("userScores", userScores);

        //variable to calculate the difference between the user's score and the scores of each user from database
        var totalDifference = 0;

        //loop thru all the friends
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);

            totalDifference = 0;

            //loop thru all the scores of each friends
            for (var j = 0; j < friends[i].scores.length; j++) {
                //getting the absolute difference of each questions score and add it
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            }
            //if sum of score difference if less than best Match difference
            if (totalDifference <= bestMatch.friendDifference) {

                //reset the best match to a new friend.
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        //saving a user to friends database
        friends.push(userData);

        //return a JSON variable
        res.json(bestMatch);
    });
};