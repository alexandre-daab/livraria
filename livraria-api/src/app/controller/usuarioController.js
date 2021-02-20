const templates = require('../views/templates'); 
const LivroController = require('../controller/livroController');

class UsuarioController{

    static rotas(){
        return {
            login:"/login"
        };
    }

    formularioLogin(){
        return (req, res) =>{
            res.marko(templates.usuarios.login);
        }
    }

    login(){
        return function(req, res, next) {
            const passport = req.passport;

            passport.authenticate('local', (erro, usuario, info) => {

                if (info) {
                    return res.marko(templates.usuarios.login);
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
                    return res.redirect(LivroController.rotas().lista);
                });
            })(req, res, next);    
        };    
    }
}
module.exports = UsuarioController;