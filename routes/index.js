var express = require('express');
var router = express.Router();

var test = require('../services/test');
var committees = require('../services/committees');
var migrations = require('../services/migrations');

router.get('/test', test.ping);
router.get('/committees', committees.getAll);
router.get('/migrations/drop', migrations.drop);
router.get('/migrations/create', migrations.create);
router.get('/committees/:cod', committees.getSingle);

module.exports = router;