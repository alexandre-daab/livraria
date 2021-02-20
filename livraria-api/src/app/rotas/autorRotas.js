const AutorController = require('../controller/autorController');
const autorController = new AutorController();
const rotaAutores = AutorController.rotas(); 

module.exports = (app) => {

    app.route(rotaAutores.lista)
    .get(autorController.lista());
}
