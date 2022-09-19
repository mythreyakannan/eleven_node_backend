"use strict";

const winston = require("winston");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://eleven_admin:nimda123@eleven-db.2eamxvw.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://eleven_admin:nimda123@eleven-db.2eamxvw.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
