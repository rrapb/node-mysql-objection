exports.up = (knex) => {
    return knex.schema
      .createTable('comments', (table) => {
        table.increments('id').primary()
        table.string('comment')
        
        table
        .integer('users_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
        .index()
        
        table
        .integer('ideas_id')
        .unsigned()
        .references('id')
        .inTable('ideas')
        .onDelete('SET NULL')
        .index()
      })
    }

  
  exports.down = (knex) => {
    return knex.schema
      .dropTableIfExists('comments')
  }
