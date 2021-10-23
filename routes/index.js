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
router.get('/sorteio', indexController.exibirSorteio);
router.get('/balas', indexController.exibirBalas);
router.get('/bebidas', indexController.exibirBebidas);
router.get('/doces', indexController.exibirDoces);
router.get('/salgadinho', indexController.exibirSalgadinho);
router.get('/embalagem', indexController.exibirEmbalagem);
router.get('/saudaveis', indexController.exibirSaudaveis);

module.exports = router;
