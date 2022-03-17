const indexController = {
    exibirIndex: (req, res) => {
        res.render('index');
    },
    exibirSorteio: (req, res) => {
        res.render('sorteio');
    },
    showLive: (req, res) => {
        res.render('live');
    },
    showSinglePage: (req, res) => {
        res.render('single-page');
    },
    showSkin: (req, res) => {
        res.render('skins');
    }
};

module.exports = indexController;