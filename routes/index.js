var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.exibirIndex);
router.get('/home', indexController.exibirHome);
router.get('/projects', indexController.exibirProjects);
router.get('/index', indexController.exibirIndex);
router.get('/mercearia', indexController.exibirMercearia);
router.get('/bolachas', indexController.exibirBolachas);

module.exports = router;
