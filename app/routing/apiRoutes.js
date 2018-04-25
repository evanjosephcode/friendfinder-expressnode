module.exports = function apiRoutes(app) {
    const express = require("express");
    const bodyParser = require("body-parser");
    const path = require("path");
    let friends = require("./../data/friends.js");

    // console.log("stuff");

    app.get("/api/friends", (req, res) => {
        return res.json(friends);
        // console.log("stuff");
        // console.log(req.body);
    });

    app.post("/api/friends", (req, res) => {
        let totalDifference;
        let differenceArray = [];
        let newfriend = req.body;
        // console.log(newfriend);
        friends.push(newfriend);


    });



}