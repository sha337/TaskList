var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    created: {type: Date, default: Date.now},
    priority: String
});

module.exports = mongoose.model("Task", taskSchema);