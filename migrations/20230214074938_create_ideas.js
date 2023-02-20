exports.up = (knex) => {
    return knex.schema
      .createTable('ideas', (table) => {
        table.increments('id').primary()
        table.string('idea')

        table
        .integer('users_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .index()
      })
    }

  
  exports.down = (knex) => {
    return knex.schema
      .dropTableIfExists('ideas')
  }
