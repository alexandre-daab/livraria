
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('formato').del()
    .then(function () {
      // Inserts seed entries
      return knex('formato').insert([
        {id: 1, nome: 'Brochura'},
        {id: 2, nome: 'Digital'},
        {id: 3, nome: 'Edicao Economica'},
        {id: 4, nome: 'Pocket'},
        {id: 5, nome: 'Capa Dura'},
      ]);
    });
};
