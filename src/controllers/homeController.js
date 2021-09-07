const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    if (req.session.user) {
        const contatos = await Contato.buscaContatos(req.session.user);
        res.render('index', { contatos });
    } else {
        res.render('login');
    }
};