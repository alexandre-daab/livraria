const BaseController = require('../controller/baseController');
const baseController = new BaseController();
const rotaBase = baseController.rotas(); 

module.exports = (app) => {

    app.get(rotaBase.base, baseController.home() );

}