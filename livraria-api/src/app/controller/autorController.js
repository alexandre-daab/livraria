const autorDao = require('../model/autor-dao'); 
const templates = require('../views/templates') 
const db = require('../../config/mysql-database');

class AutorController{

    static rotas(){
        return {
            //autenticadas:"/livros*",
            lista:"/autor",
            deleta:"/autor/:id",
            edita:"/autor/cadastrar/:id",
            cadastra:"/autor/cadastrar"
        }
    }

    lista(){
        return async (req, res)=>{

            //const autorDao = new autorDao(db);
            
            //const autores = await autorDao.lista()
            const autores = {};


            res.marko(templates.autores.lista, {autores})}
        
    }

}
module.exports = AutorController;
