const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const connectDB = require("./db");
const User = require("./models/Users")

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  });

  // Protected Route
app.get("/profile", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      res.json(user);
  } catch (err) {
      res.status(400).json({ message: "Invalid token" });
  }
});

  // Fetch Users API
app.get("/users", async (req, res) => {
  const users = await User.find().select("-password"); // Exclude password field
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log("Server running on port 5000"));