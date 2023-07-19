const mongoose = require("mongoose");
// const { string } = require("prop-types");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPass: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

// we are hashing password here

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
