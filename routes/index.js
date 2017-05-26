var express = require('express');
var router = express.Router();

var test = require('../services/test');
var committees = require('../services/committees');
var migrations = require('../services/migrations');
var menu = require('../services/menu');

router.get('/test', test.ping);
router.get('/migrations/drop', migrations.drop);
router.get('/migrations/create', migrations.create);
router.get('/migrations/insert', migrations.insert);
router.get('/committees', committees.getAll);
router.get('/committees/:cod', committees.getSingle);
router.get('/committees/:cod/index', committees.getIndexContent);
router.get('/committees/:cod/menu', menu.getMenu);

module.exports = router;