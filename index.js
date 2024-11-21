const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const groupRoutes = require('./routes/groupRoutes');
// const messageRoutes = require('./routes/messagesRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// app.use(cors());

// Routes
app.get('/',(req,res)=>{
  res.send("Server Start")
}
       )
// app.use('/api/auth', authRoutes);
// app.use('/api/groups', groupRoutes);
// app.use('/api/message',messageRoutes)

// Connect to MongoDB
const port = 5000

mongoose.connect('mongodb+srv://manofiron786:6xnZBxhdrxtOLjBe@chat.w72bq.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = port || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;