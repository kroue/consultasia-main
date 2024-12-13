const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash the password

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures the username is unique
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  pronouns: {
    type: String,
    default: '',
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Hash the password before saving the user to the database
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // 10 salt rounds
  }
  next();
});

// Method to check if password matches the hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
