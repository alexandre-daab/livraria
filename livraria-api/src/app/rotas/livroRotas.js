const LivroController = require("../controller/livroController")
//const UsuarioController = require('../controller/usuarioController');
const Livro = require("../model/livro")
const livroController = new LivroController()
const livro = new Livro()
const rotaLivros = LivroController.rotas()

module.exports = (app) => {
  // app.use(rotaLivros.autenticadas, function(req, resp, next) {
  //     if (req.isAuthenticated()) {
  //         next();
  //     } else {
  //         resp.redirect(UsuarioController.rotas().login);
  //     }
  // });

  app.route(rotaLivros.lista).get(livroController.lista()).post(livro.validacoes(), livroController.cadastra()).put(livroController.edita())

  app.delete(rotaLivros.deleta, livroController.deleta())

  app.get(rotaLivros.cadastra, livroController.formularioCadastra())

  app.get(rotaLivros.edita, livroController.formularioEdita())

  app.post("/api/livros", (req, res) => {
    res.send(req.body.nome + " Você está na rota de livros e está realizando um POST")
  })
}
