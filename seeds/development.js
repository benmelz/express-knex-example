/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('managers').del();
  await knex('managers').insert([
    { id: 1, 'first_name': 'Benjamin', 'last_name': 'Melz' },
    { id: 2, 'first_name': 'Heath', 'last_name': 'Brames' }
  ]);
};
