import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import jwt for token generation
import User from './models/User.js'; // Ensure this points to your User model, include `.js` in ES Modules
import foodRouter from './routes/foodRoute.js'; // Include `.js` in import paths
import authRouter from './routes/authRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Enable parsing of JSON request bodies

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/auth",authRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food-delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Registration route
// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     console.log(req.body);

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         console.log(hashedPassword);
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.status(201).json({ message: 'Registration successful' });
//     } catch (error) {
//         console.error('Error during registration:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Login endpoint
// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid password' });
//         }

//         const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
//         res.json({ token });
//     } catch (err) {
//         console.error('Error during login:', err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
