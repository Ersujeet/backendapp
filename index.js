const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const groupRoutes = require('./routes/groupRoutes');
const messageRoutes = require('./routes/messagesRoutes');
const cors = require('cors');
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// app.use(cors());

// const cors = require('cors');  https://chat-application-ten-delta.vercel.app/
app.use(cors({
    origin: 'https://chat-application-ten-delta.vercel.app', // or '*' for all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// Routes
app.get('/',(req,res)=>{
  res.send("Server Start")
}
       )
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/message',messageRoutes)

// Connect to MongoDB
const port = 5000

mongoose.connect(prosses.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = port || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
