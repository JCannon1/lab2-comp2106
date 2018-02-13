const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Lab 2',
    message: 'COMP2106 Jesse Cannon Lab 2' 
  });
});

// GET: /jesse
router.get('/jesse', (req, res, next) => {
  // load the jesse view
  res.render('jesse', {
    title: 'Jesse',
      message: 'Jesse is a web design student. He enjoys many sports, but his favourite is hockey.'
  });
});

// GET: /dawn
router.get('/dawn', (req, res, next) => {
  // load the dawn view
  res.render('dawn', {
    title: 'Dawn',
      message: 'Dawn works at a Nuclear Power Plant.'
  });
});

// GET: /steve
router.get('/steve', (req, res, next) => {
    // load the steve view
    res.render('steve', {
      title: 'Steve',
        message: 'Steve also works at a Nuclear Power Plant and has worked in Europe.'
    });
  });
  
  // GET: /amy
  router.get('/amy', (req, res, next) => {
    // load the amy view
    res.render('amy', {
      title: 'Amy',
        message: 'Amy works for a software company in Toronto.'
    });
  });

module.exports = router;
