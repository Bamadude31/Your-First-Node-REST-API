//This has to be uploaded as a migration to a knexfile.js

exports.up = function(knex) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id').primary();
    table.increments('UserId').notNullable();
    table.string('Item_Name').notNullable();
    table.string('Description').notNullable();
    table.integer('Quality').notNullable();
})}


exports.down = function(knex) {
  return knex.schema.dropTable('items');
};
//------------------------------------------------------
/* migration: <timestamp>_create_things.js

module.exports.up = function(knex, Promise) {
  // Create referenced table before referencing table.
  return knex.schema
  .createTable('first', function(first) {
    first.increments('id').primary();
  })
  .createTable('second', function(second) {
    second.increments('id').primary();
    second.integer('first_id').references('id').inTable('first').notNull().onDelete('cascade');
  });
};

module.exports.down = function(knex, Promise) {
  // Reverse order here to prevent error.
  return knex.schema
  .dropTable('second')
  .dropTable('first');
}*/