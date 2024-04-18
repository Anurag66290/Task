const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      username,
      password
    });

    res.json({ success: true, message: 'User registered successfully', data: newUser });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
};
