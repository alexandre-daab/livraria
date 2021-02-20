class BaseController{
    rotas(){
        return {
            base:"/"
        }
    }

    home(){
        return (req, res)=>{
            res.send(
                `<html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código</h1>
                    </body> 
                </html>`
            )
        };
    }
}

module.exports = BaseController;