class LivroDao{

    constructor(db){
        this._db = db;
    }

    async lista(){
        let lista =  await this._db
            .select()
            .from('livros');
            
            return lista;
    }

    async buscaPorId(id){
        const livro = await this._db
            .select()
            .from('livros')
            .where('id', id);
        return(livro);    
    }

    async adiciona(livro){
        await this._db('livros')
            .insert({
                titulo: livro.titulo, 
                subtitulo: livro.subtitulo, 
                sinopse: livro.sinopse,
                isbn: livro.isbn, 
                edicao: livro.edicao,
                ano: livro.ano, 
                preco:livro.preco,
                formato:livro.formato,
            });        
    }

    async edita(livro){
        await this._db('livros')
            .where('id', livro.id)
            .update({
                titulo: livro.titulo, 
                subtitulo: livro.subtitulo, 
                sinopse: livro.sinopse,
                isbn: livro.isbn, 
                edicao: livro.edicao,
                ano: livro.ano, 
                preco:livro.preco,
                formato:livro.formato,
        });    
    }

    async remove(id){
        await this._db('livros')
            .where('id', id)
            .del();
    }

    async listaFormato(){
        let lista =  await this._db
        .select('id', 'nome')
        .from('formato');
        
        return lista;
    }

}
module.exports = LivroDao;