import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc        Auth User/Set token
// @route       POST /api/users/auth
// @access      Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

// @desc        Register a new user
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    throw new Error('Invalid user data');
  }
});

// @desc        Logout User
// @route       POST /api/users
// @access      Public
const logoutUSer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' });
});

// @desc        Get User Profile
// @route       GET /api/users/profile
// @access      Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile' });
});

// @desc        UPDATE User Profile
// @route       PUT /api/users/profile
// @access      Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' });
});

export {
  authUser,
  registerUser,
  logoutUSer,
  getUserProfile,
  updateUserProfile
};
