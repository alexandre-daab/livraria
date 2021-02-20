
exports.up = function(knex) {
    knex.schema.dropTableIfExists('usuario');

    return knex.schema.createTable('usuario', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.bigInteger('created_by');
        table.bigInteger('updated_by');
    }) 
};

exports.down = function(knex) {
  
};
