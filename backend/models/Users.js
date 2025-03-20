const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define Schema
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Auto-add createdAt & updatedAt fields
);

// Hash Password Before Saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare Password for Login
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export Model
const User = mongoose.model("User", UserSchema);
module.exports = User;
