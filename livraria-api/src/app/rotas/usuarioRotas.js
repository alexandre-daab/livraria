const UsuarioController = require('../controller/usuarioController');
const usuarioController = new UsuarioController();
const rotaUsuarios = UsuarioController.rotas(); 

module.exports = (app) => {
    app.route(rotaUsuarios.login)
        .get(usuarioController.formularioLogin())
        .post(usuarioController.login());
}