const indexController = {
    exibirIndex: (req, res) => {
        res.render('index')
    },
    exibirSorteio: (req, res) => {
        res.render('sorteio')
    },
};

module.exports = indexController;