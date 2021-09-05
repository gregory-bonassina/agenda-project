exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true };
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'asdasd');
    // req.flash('success', 'bla');
    // console.log( req.flash('info'), req.flash('error'), req.flash('success') );
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};