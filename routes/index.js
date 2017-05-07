var express = require('express');
var router = express.Router();

var test = require('../services/test');
var committees = require('../services/committees');

router.get('/test', test.ping);
router.get('/committees', committees.getAll);

module.exports = router;