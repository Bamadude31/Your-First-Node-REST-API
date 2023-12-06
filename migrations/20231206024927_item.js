/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id').primary();
    table.integer('UserId').notNullable();
    table.string('Item_Name').notNullable();
    table.string('Description').notNullable();
    table.integer('Quality').notNullable();
})}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('items').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('items');
    }
  });
};
