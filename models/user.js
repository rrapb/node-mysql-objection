const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection.development);
Model.knex(knexConnection)

class User extends Model {


  static get tableName () {
      return 'users'
    }

    static get relationMappings () {
      return { 
        idea: {
          relation: Model.HasManyRelation,
          modelClass: __dirname + '/idea',
          join: {
            from: 'users.id',
            to: 'ideas.users_id'
          }
        },
        comments: {
          relation: Model.HasManyRelation,
          modelClass: __dirname + '/comment',
          join: {
            from: 'users.id',
            to: 'comments.users_id'
        }
      },
      }
    }
    static get jsonSchema(){
      return{
        properties:{
          id:{type:'integer'},
          idea:{type: 'string'},
          creator:{type: 'string'}
        }
      }
    }
  }
  module.exports = { User };