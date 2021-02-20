
exports.up = function(knex) {
    knex.schema.dropTableIfExists('autor');
    
    return knex.schema.createTable('autor', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('observacao').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.bigInteger('created_by');
        table.bigInteger('updated_by');
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('autor');
};
