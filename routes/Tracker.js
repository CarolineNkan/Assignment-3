// CRUD --> CREATE, READ, UPDATE, DELETE
var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Task = require('../models/Tracker');
let AssignmentController = require('../controllers/Tracker')
// READ OPERATION ----------------------------------------------------
// get route for the assignments list
// if you get something, put it in the booklist
router.get('/', AssignmentController.displayAssignmentlist); 

// CREATE OPERATION ----------------------------------------------------
// get route for Add Assignment
router.get('/add', AssignmentController.AddAssignment);

// post route for Add Assignment
router.post('/add', AssignmentController.ProcessAssignment);

// UPDATE OPERATION ----------------------------------------------------
// get route for displaying the Edit 
router.get('/edit/:id', AssignmentController.EditAssignment);

// post route for processing the Edit 
router.post('/edit/:id', AssignmentController.ProcessEditAssignment);

//DELETE OPERATION ----------------------------------------------------
// get to perform delete operation
router.get('/delete/:id', AssignmentController.DeleteAssignment);

module.exports = router;