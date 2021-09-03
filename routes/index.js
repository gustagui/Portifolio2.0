var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.exibirIndex);
router.get('/home', indexController.exibirIndex);
router.get('/projects', indexController.exibirProjects);

module.exports = router;
