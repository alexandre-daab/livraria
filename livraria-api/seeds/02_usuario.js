
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {id: 1, nome: 'Usuário Teste', email: 'teste@teste.com', senha: '123456'},
      ]);
    });
};
