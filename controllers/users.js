const Joi = require('joi')
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const passport = require("passport");
require('../middleware/passport')(passport);
require('dotenv').config()


const { createJwt } = require("../helpers/JwtCreation");

const register = async (req, res) => {
    try {
      const {error} = registerValidate(req.body);
      if (error) return res.status(400).send(error.details[0].message);
  
      let user = await User.query().findOne({
        email: req.body.email
      });
      if (user) {
        return res.status(400).send('This user already exists!');
      }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    user = await User.query().allowGraph('[full_name, email, password]').insert(req.body);
  

    const token = await createJwt({
      id : user.id
    })
    res.send(token);
  
    } catch (err) {
      console.log(err);
    }
  };

const login = async(req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.query().findOne({email: req.body.email});
    if (!user) return res.status(400).send('User does not exist!');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password!');
    const token = await createJwt({
        id: user.id,
    });
    res.send({
        status:200,
        success:true,
        token
    });
    }
    
    const getUsers = async(req, res) => {
      try {
        const users = await User.query().select('full_name', 'email'); 
        res.send(users);
        
      } catch (error) {
          console.log(error)
      }

    }

    const getUser = async(req, res) => {
      const user = await User.query().findById(req.params.id).select('full_name', 'email').withGraphFetched('idea')
      res.send(user)
    } 

    const deleteUser = async(req, res) => {
      await User.query().deleteById(req.params.id);
      res.send('Deleted successfuly! ');
    }


function registerValidate(user){
  const schema = Joi.object({
    full_name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
})
return schema.validate(user);
}

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(req);
}

module.exports = {
  register,
  login,
  getUser,
  getUsers,
  deleteUser
}