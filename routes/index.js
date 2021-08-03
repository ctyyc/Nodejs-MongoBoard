const express = require('express');

const router = express.Router();

// root
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// login

// logout


module.exports = router;
