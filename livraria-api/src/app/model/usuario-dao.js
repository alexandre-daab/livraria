class Usuario{

    constructor(db){
        this._db = db;
    }
    
    async buscaPorEmail(email){
        const usuario = await this._db
        .select('*')
        .from('usuario')
        .where('email', email);
        
        return usuario;    
    }

    async validaUsuario(email, senha){
        const usuario = await this._db
        .select('*')
        .from('usuario')
        .where('email', email)
        .andWhere('senha', senha);
        
        return usuario;    
    }
}
module.exports = Usuario;