// module.exports = function apiRoutes(app) {
//     const express = require("express");
//     const bodyParser = require("body-parser");
//     const path = require("path");
//     let tables = require("./../data/tables.js");
//     let waitlist = require("./../data/waitlist.js");

//     app.get("/api/tables", (req, res) => {
//         return res.json(tables);
//     });

//     app.get("/api/waitlist", (req, res) => {
//         return res.json(waitlist);
//     });

//     app.post("/api/clear", (req, res) => {
//         tables.length = 0;
//         waitlist.length = 0;
//     });


//     app.post("/api/tables", (req, res) => {

//         let newRes = req.body;
//         //   logging the object of userinputs 
//         console.log(newRes);

//         if (tables.length < 5) {
//             tables.push(newRes);
//             res.json(true);
//         } else {
//             waitlist.push(newRes);
//             res.json(false);
//         }

//         res.json(tables);

//     });
// }