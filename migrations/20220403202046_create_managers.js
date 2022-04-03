/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('managers', (table) => {
    table.increments('id').unique().notNullable().index().primary();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.unique(['first_name', 'last_name']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('managers');
};
