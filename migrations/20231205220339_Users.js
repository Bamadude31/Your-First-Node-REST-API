/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('postgres', function(table) {
    table.increments('id').primary();
    table.string('first_name',255);
    table.string('last_name',255);
    table.string('email',255);
    table.string('username',255);
    table.string('password',255);
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('postgres');
};
