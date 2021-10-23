const indexController = {
    exibirHome: (req, res, next) => {
        res.render('home', { title: 'Portfolio - Gustavo Silva' });
    },
    exibirProjects: (req, res) => {
        res.render('projects', { title: 'Portifolio - Gustavo Silva'});
    },
    exibirIndex: (req, res) => {
        res.render('index')
    },
    exibirMercearia: (req, res) => {
        res.render('mercearia')
    },
    exibirBolachas: (req, res) => {
        res.render('bolachas')
    },
    exibirSorteio: (req, res) => {
        res.render('sorteio')
    },
    exibirBalas: (req, res) => {
        res.render('balas')
    },
    exibirBebidas: (req, res) => {
        res.render('bebidas')
    },
    exibirDoces: (req, res) => {
        res.render('doces')
    },
    exibirEmbalagem: (req, res) => {
        res.render('embalagem')
    },
    exibirSaudaveis: (req, res) => {
        res.render('saudaveis')
    },
    exibirSalgadinho: (req, res) => {
        res.render('salgadinho')
    },
};

module.exports = indexController;