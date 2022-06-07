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
    showHome: (req, res) => {
        res.render('home');
    },
    showAbout: (req, res) => {
        res.render('about');
    },
    showPortfolio: (req, res) => {
        res.render('portfolio')
    },
};

module.exports = indexController;