/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del();
  // Inserts seed entries
  await knex('Users').insert([
        { id: 1, first_name: 'John', last_name: 'Doe', username: 'johndoe', password: 'password1' },
        { id: 2, first_name: 'Jane', last_name: 'Smith', username: 'janesmith', password: 'password2' },
        { id: 3, first_name: 'Bob', last_name: 'Johnson', username: 'bjohnson', password: 'password3' }
      ]);
    };

