const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection.development)
Model.knex(knexConnection)
class Comment extends Model {
    static get tableName() {
        return 'comments'
    }

    static get relationMappings() {

        return {
            idea: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/idea',
                join: {
                    from: 'comments.ideas_id',
                    to: 'ideas.id'
                }
            },
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/user',
                join: {
                    from: 'comments.users_id',
                    to: 'users.id'
                }
            }
        }
    }
}

  module.exports = { Comment };


