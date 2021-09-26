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
};

module.exports = indexController;