const indexController = {
    exibirIndex: (req, res, next) => {
        res.render('index', { title: 'Portfolio - Gustavo Silva' });
    },
    exibirProjects: (req, res) => {
        res.render('projects', { title: 'Portifolio - Gustavo Silva'});
    }
};

module.exports = indexController;