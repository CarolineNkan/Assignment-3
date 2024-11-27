var express = require('express');
var router = express.Router();
let DB = require('../config/db');

/* GET default page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Assignment Tracker'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'AssignmentTracker'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Us'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Us'});
});

/* GET FAQ page. */
router.get('/FAQ', function(req, res, next) {
  res.render('FAQ', { 
    title: 'FAQ'});
});

module.exports = router;
