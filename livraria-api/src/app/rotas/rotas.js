const baseRotas = require('./baseRotas');
const usuarioRotas = require('./usuarioRotas');
const livroRotas = require('./livroRotas');
const autorRotas = require('./autorRotas');


module.exports = (app) => {
    baseRotas(app);
    usuarioRotas(app);
    livroRotas(app);
    autorRotas(app);
    

}


