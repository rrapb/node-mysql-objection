const Knex = require('knex')
const connection = require('../knexfile')
const {Model} = require('objection')
const knexConnection = Knex(connection.development);
Model.knex(knexConnection)

class Idea extends Model {


    static get tableName() {
        return 'ideas'
    }

    // static get idColumn(){
    //   return 'id';
    // }

    static get relationMappings() {
        // const Comment = require('./comment').default;
        return {
            comments: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + '/comment',
                join: {
                    from: 'ideas.id',
                    to: 'comments.ideas_id'
                }
            },
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/users',
                join: {
                    from: 'users.id',
                    to: 'ideas.users_id'
                }
            }

        }
    }

    static get jsonSchema() {
        return {
            properties: {
                id: {type: 'integer'},
                idea: {type: 'string'},
                creator: {type: 'string'}
            }
        }
    }
}

module.exports = {Idea};