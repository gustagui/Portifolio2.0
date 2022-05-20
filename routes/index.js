var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.exibirIndex);
router.get('/index', indexController.exibirIndex);
router.get('/sorteio', indexController.exibirSorteio);
router.get('/live', indexController.showLive);
router.get('/skins', indexController.showSkin);
router.get('/home', indexController.showHome);
router.get('/about', indexController.showAbout);

router.get('/single-page', indexController.showSinglePage)

module.exports = router;
