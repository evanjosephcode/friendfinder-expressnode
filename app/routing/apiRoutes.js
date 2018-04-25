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
        console.log(newfriend);
        console.log("trying a new thing right now");
        
        for (i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (j = 0 ; j < newfriend.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - newfriend.scores[j]);
            }
            differenceArray.push(totalDifference);
        }

        let match = differenceArray.indexOf(Math.min(...differenceArray));
        friends.push(newfriend);

        // fs.readFile(path.join(__dirname, '../data/friends.json'), 'utf8', (err, data) => {
        //     if (err) throw err;
        //     let json = JSON.parse(data);
        //     json.push(newfriend);
    
        //     fs.writeFile(path.join(__dirname, '../data/friends.json'), JSON.stringify(json, null, 2), (err) => {
        //       if (err) throw err;
        //     });
        // });
    
        // res.json(friends[match]);


    });



}