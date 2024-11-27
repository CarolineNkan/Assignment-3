let mongoose = require('mongoose');
//Create an assignment model
let assignmentModel = mongoose.Schema({
    Course:String,
    DueDate:String,
    Status:String,
    },
 {
   collection:"Assignments"
 }
);
module.exports = mongoose.model('Task',assignmentModel);
