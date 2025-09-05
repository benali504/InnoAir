const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please insert your name "],
    },
    lastname: {
      type: String,
      required: [true, "Please insert your name "],
    },
    email: {
      type: String,
      required: [true, "Please insert your email "],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please insert your password "],
      trim: true,
    },
    adresse: {
      type: String,
      default: "1 rue Habib bourguiba Tunis centre ville 1001",
    },
    phone: {
      type: String,
      default: "+21688471527",
    },
    imgUrl: {
      type: String,
      default: "uploads/defaultUser.png",
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
