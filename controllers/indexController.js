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
    }
};

module.exports = indexController;