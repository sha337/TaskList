var express = require("express"),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    Task           = require("./models/task"),
    app = express();


//Requiring routes
var taskRoutes    = require("./routes/task");


mongoose.connect("mongodb://localhost:27017/Tasklist", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(taskRoutes);

app.listen(process.env.PORT || '3000', process.env.IP, function(){
    console.log("server is on");
});