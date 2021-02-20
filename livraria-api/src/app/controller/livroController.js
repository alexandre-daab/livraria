const LivroDao = require('../model/livro-dao'); 
const templates = require('../views/templates') 
const db = require('../../config/mysql-database');
const { validationResult } = require('express-validator/check');

class LivroController{

    static rotas(){
        return {
            //autenticadas:"/livros*",
            lista:"/livros",
            deleta:"/livros/:id",
            edita:"/livros/cadastrar/:id",
            cadastra:"/livros/cadastrar",
            apiLista:"/api/livros"
        }
    }

    lista(){
        return async (req, res)=>{

            const livroDao = new LivroDao(db);
            
            const livros = await livroDao.lista()

            res.marko(templates.livros.lista, {livros})}
        
    }

    cadastra(){
        return async (req, res)=>{
            const erros = validationResult(req);
            const livroDao = new LivroDao(db);

            if (!erros.isEmpty()) {
                //return res.status(422).json({ errors: errors.array() });
                return res.marko(templates.livros.form, {livro: req.body, errosValidacao: erros.array()});
            }
    
            await livroDao.adiciona(req.body);
            res.redirect('/livros')
        };
    }

    edita(){
        return (req, res)=>{
            const livroDao = new LivroDao(db);

            livroDao.edita(req.body)
            .then(res.redirect('/livros'))
            .catch(erro => console.log(erro))
        };
    }

    deleta(){
        return (req, res)=>{
            const id = req.params.id;
            const livroDao = new LivroDao(db);
            livroDao.remove(id)
                .then(()=> {
                    res.status(200).end()
                })
                .catch(erro => {
                    console.log(erro)
                })
        };
    }

    formularioCadastra(){
        return (req, res) =>{
            const livroDao = new LivroDao(db);
            //let formatos = null;
            
            let formatos = livroDao.listaFormato()
                .then(formato => {
                    res.marko(templates.livros.form, { livro : {}, formatos: formato });
                })
                .catch(erro => console.log(erro));
        }
    }

    formularioEdita(){
        return (req, res) =>{
            const id = req.params.id;
            const livroDao = new LivroDao(db);
    
            livroDao.buscaPorId(id)
                .then((livro) =>{


                    livroDao.listaFormato()
                    .then((formato) =>{
                        res.marko(templates.livros.form, { livro : livro[0], formatos:formato });
                    })
                    .catch((err)=>{console.log(err)})




                    //res.marko(templates.livros.form, { livro : livro[0] });
                })
                .catch((err)=>{console.log(err)})
        };
    }


}
module.exports = LivroController;