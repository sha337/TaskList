var express = require("express");
var router  = express.Router();
var Task    = require("../models/task");



router.get("/", function(req, res){
    res.redirect("/task");
});

//Index route
router.get("/task", function(req, res){
    Task.find({}, function(err, allTasks){
        if(err){
            console.log(err);
        }else{
            res.render("home", {task: allTasks});
        }
    }); 
});

//Show New page
router.get("/task/new", function(req, res){
    res.render("new");
});

//Create - Add new task to the database and redirect home
router.post("/task", function(req, res){
    //create a new task and add to DB
    Task.create(req.body.newtask, function(err, newtask){
        if(err){
            console.log(err);
        }else{
            res.redirect("/task");
        }
    });
});

//EDIT ROUTE
router.get("/task/:id/edit", function(req, res){
    Task.findById(req.params.id, function(err, foundTask){
        if(err){
            res.redirect("/");
        }else{
            res.render("edit", {task: foundTask});
        }
    });
});

//UPDATE ROUTE
router.put("/task/:id", function(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body.newtask, function(err, updatedTask){
        if(err){
            res.redirect("/task");
        }else{
            res.redirect("/task");
        }
    });
});

//Delete task
router.delete("/task/:id", function(req, res){
    Task.findOneAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.log(err);
            res.redirect("/task");
        }else{
            res.redirect("/task");
        }
    });
});


module.exports = router;