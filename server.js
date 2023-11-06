const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const app = express();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');

// Enable CORS for all routes
app.use(cors());

// Body parsing middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/FormData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and model
const formdataSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Textarea: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isLoggedIn: Boolean, // Track user login state
});
const formDataSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: Date,
  guests: Number,
  totalprice: Number,
}); 

const FormData = mongoose.model('FormData', formDataSchema);
const User = mongoose.model("User", userSchema);
const secretKey = 'hello';
const formdata = mongoose.model('Information', formdataSchema);

// Example route for user registration
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
      console.log("error user exists")
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword, isLoggedIn: false });

    // Save the user data to MongoDB
    await user.save();
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Example route for user login
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Received login request:", { username, password }); 

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      console.error("User not found");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.error("Password does not match");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    console.log("Token Generate",token)
    // Update isLoggedIn field to true
    user.isLoggedIn = true;
    await user.save();
    
    res.status(200).json({ message: "User logged in successfully" });
    console.log("User login success")
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Example route for user logout
app.post("/api/logout", async (req, res) => {
  try {
    // Implement your logout logic here, e.g., clear authentication tokens
    const userId = req.userId; // Assuming you have a way to get the user's ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update isLoggedIn field to false
    user.isLoggedIn = false;
    await user.save();
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
 

// Define API route to insert data
app.post('/api/insert', async (req, res) => {
  const { Name, Email, Textarea } = req.body;
  try {
    const newData = new formdata({ Name, Email, Textarea });
    await newData.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Error inserting data' });
  }
});

app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, phone, date, guests, totalprice } = req.body;
    const formData = new FormData({ name, phone, date, guests, totalprice });
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
