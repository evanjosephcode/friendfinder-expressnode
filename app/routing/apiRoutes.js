module.exports = function apiRoutes(app) {
    const express = require("express");
    const bodyParser = require("body-parser");
    const path = require("path");
    let friends = require("./../data/friends.js");


    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        let totalDifference;
        let differenceArray = [];
        let newfriend = req.body;

        for (i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - newfriend.scores[j]);
            }
            differenceArray.push(totalDifference);


        }



        let match = differenceArray.indexOf(Math.min(...differenceArray));
        friends.push(newfriend);
        res.json(friends[match]);






    });



}