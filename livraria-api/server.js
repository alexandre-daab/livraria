const app = require('./src/config/custom-express');

app.listen(5000, function(){
    console.log('Servidor Iniciado em: ' + Date() + " na porta 5000");
});
