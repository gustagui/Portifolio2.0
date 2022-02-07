var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.exibirIndex);
router.get('/index', indexController.exibirIndex);
router.get('/sorteio', indexController.exibirSorteio);

module.exports = router;
