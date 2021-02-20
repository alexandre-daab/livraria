
exports.up = function(knex) {

    knex.schema.dropTableIfExists('livros');

    return knex.schema.createTable('livros', function(table) {
        table.increments();
        table.string('titulo').notNullable();
        table.string('subtitulo');
        table.string('sinopse');
        table.foreign('formato', 'formato_id');
        table.string('isbn').notNullable();
        table.string('edicao');
        table.string('ano');
        table.integer('formato');
        table.decimal('preco', 6, 2);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.bigInteger('created_by');
        table.bigInteger('updated_by');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('livros');
};
