
exports.up = function(knex) {
    knex.schema.dropTableIfExists('formato');

    return knex.schema.createTable('formato', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.bigInteger('created_by');
        table.bigInteger('updated_by');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('formato');
};
