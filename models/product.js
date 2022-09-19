const mongoose = require("mongoose");
const Joi = require("joi");
const string = require("joi/lib/types/string");

const productSchema = new mongoose.Schema({
  Pname: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false
  }
});

const Product = mongoose.model("Product", productSchema);

const validateProduct = (product) => {
  const schema = {
    Pname: Joi.string().min(1).max(50).required(),
    description: Joi.string().min(1).max(200).required(),
    price: Joi.number().required(),
    image: Joi.string().min(0).max(400),
  };

  return Joi.validate(product, schema);
};

exports.Product = Product;
exports.validate = validateProduct;
