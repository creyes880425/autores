const Autor = require('../models/autor.model');


module.exports.create = (req, resp) => {
    const autor = req.body;
    Autor.create(autor)
        .then(data => resp.status(200).json({ ok: true, message: 'Se agregó el autor', data: data}))
        .catch(error => {
            console.log('CREATE', error);
            resp.status(400).json(error)
        });
}

module.exports.edit = (req, resp) => {
    const autor = req.body;
    Autor.findOneAndUpdate({_id: req.params.id }, autor, { runValidators: true })
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el autor', data: autor}))
        .catch(error => {
            console.log('EDIT', error);
            resp.status(400).json(error)
        });
}

module.exports.get = (req, resp) => {
    Autor.findById(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'autor', data: data}))
        .catch(error => {
            console.log('GET', error);
            resp.status(400).json({ok: false, message: 'Error al obtener el autor'})
        });
}

module.exports.list = (req, resp) => {
    Autor.find()
        .then(data => resp.status(200).json({ ok: true, message: 'autors', data: data}))
        .catch(error => {
            console.log('LIST', error);
            resp.status(400).json({ok: false, message: 'Error al obtener els autors'})
        });
}

module.exports.del = (req, resp) => {
    Autor.findByIdAndRemove(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Se eliminó  el autor', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            resp.status(400).json({ok: false, message: 'Error al eliminar el autor'})
        });
}