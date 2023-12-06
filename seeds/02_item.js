/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del();
  await knex('items').insert([
    { id: 1, UserId: 1, Item_Name: 'Item 1', Description: 'Description 1', Quality: 1 },
    { id: 2, UserId: 2, Item_Name: 'Item 2', Description: 'Description 2', Quality: 2 },
    { id: 3, UserId: 3, Item_Name: 'Item 3', Description: 'Description 3', Quality: 3 }
  ]);
};