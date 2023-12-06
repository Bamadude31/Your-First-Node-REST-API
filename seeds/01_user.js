/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function() {
      // Inserts seed entries
      return knex('Users').insert([
        { id: 1, first_name: 'John', last_name: 'Doe', username: 'johndoe', password: 'password1' },
        { id: 2, first_name: 'Jane', last_name: 'Smith', username: 'janesmith', password: 'password2' },
        { id: 3, first_name: 'Bob', last_name: 'Johnson', username: 'bjohnson', password: 'password3' }
      ]);
    });
};
