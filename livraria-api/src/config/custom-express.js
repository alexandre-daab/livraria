require('marko/node-require').install();
require('marko/express');
const templates = require('../app/views/templates')
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

//criacao de um middleware para servir arquivos estaticos
app.use('/estatico', express.static('src/app/public'));

//criação de middleware para receber dados por urlEncoded
app.use(bodyparser.urlencoded({extended:true}));

//criação de middleware para receber dados por urlEncoded
app.use(bodyparser.json());


//middleware para sobrescrever metodo http
app.use(methodOverride(function(req, res){
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const sessionAuthentication = require('./sessionAuthentication');
sessionAuthentication(app);

const rotas = require('../app/rotas/rotas');
rotas(app);

app.use(function(req, res, next){return res.status(404).marko(templates.base.erro404);});

app.use(function(err, req, res, next){return res.status(500).marko(templates.base.erro500);});

module.exports = app;