const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require('cors')

const passport = require("passport");
const users = require("./routes/api/users");


// require('dotenv').config()
// console.log(process.env)
// DB Config
const DB = require("./config/keys").mongoURI;

//  User from "./models/userModel"

const User = require("./models/userModel");

// app.use(cors())

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

//connect with db
// dotenv.config();
mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => {
    console.log('Connected to db!');
}).catch((error) => {
    console.log(error.message);
})


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

//create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})