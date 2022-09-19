const Joi = require('joi');
const bcrypt = require('bcryptjs');
const {User} = require('../models/user');


const login = async (req, res, next) => {
    const {error} = validate(req.body);

    if(error) return res.status(422).send(error.details[0].message);

    const user = await User.findOne({email: req.body.email}).exec();
    if(!user) return res.status(404).send('Invalid email or password');

    const validPassword= await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(404).send('Invalid email or password');

    const token  ={JWT: user.generateAuthToken()}
    res.send(token);
}

const status = (req, res) => {
    res.send("Running eleven backend services");
  };



const validate = (req) => {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }

  return  Joi.validate(req, schema);
}

module.exports = {
    login,
    status
}
