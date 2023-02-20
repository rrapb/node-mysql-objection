/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ideas').del()
  await knex('ideas').insert([
    {idea: 'To do shopify store', users_id: 1},
    {idea: 'Real Madrid', users_id: 2},
    {idea: 'NBA', users_id: 2}
  ]);
};
