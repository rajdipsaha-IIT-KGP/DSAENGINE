const express = require('express');
const cors = require('cors');
let app = express();

app.use(cors()); // ✅ FIRST: enable CORS before routes
app.use(express.json()); // ✅ parse JSON before routes

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secretkey123';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { UserModel } = require('./db');
const cfRoute = require('./codeforces');

// ✅ Mount route after cors and json middleware
app.use('/api/codeforces', cfRoute);

// ✅ MongoDB connect
mongoose.connect('mongodb+srv://rajdipsaha7697:Rajdip%402006@rajdip.r4ziwjt.mongodb.net/DSAENGINE_DATABASE')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Signup Route
app.post('/signup', async function (req, res) {
  const { username, email, password } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      message: "User created successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });

  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Signin Route
app.post('/signin', async function (req, res) {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isValidPass = await bcrypt.compare(password, user.password);
    if (!isValidPass) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      message: "User signed in successfully",
      token: token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Error signing in:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Start Server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
