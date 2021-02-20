
exports.up = function(knex) {
    knex.schema.dropTableIfExists('livro-autor');
    
    return knex.schema.createTable('livro-autor', function(table) {
        table.bigInteger('id_livro');
        table.bigInteger('id_autor');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('livro-autor');  
};
