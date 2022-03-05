require("dotenv").config()
var express = require('express');
var app = express();
var formidable = require('express-formidable');
var cors = require('cors');



require("./database");
app.use(formidable());
app.use(cors({ origin: true }))



require("./vote.route")(app);
require("./visit.route")(app);
app.listen(process.env.PORT || 3000, function(){
    console.log("app is running on port " + process.env.PORT || 3000);
})