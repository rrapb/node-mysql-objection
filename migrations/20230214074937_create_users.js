exports.up = (knex) => {
    return knex.schema
      .createTable('users', (table) => {
        table.increments('id').primary()
        table.string('full_name')
        table.string('email')
        table.string('password')
      })
    }

  
  exports.down = (knex) => {
    return knex.schema
      .dropTableIfExists('users')
  }