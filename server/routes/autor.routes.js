const AutorController = require('../controllers/autor.controller');

module.exports = app => {
    app.get('/api/autores', AutorController.list);
    app.get('/api/autores/:id', AutorController.get);
    app.post('/api/autores', AutorController.create);
    app.put('/api/autores/:id', AutorController.edit);
    app.delete('/api/autores/:id', AutorController.del);
}