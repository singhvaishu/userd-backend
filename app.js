
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
const app = express();

connectDB();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());


app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});
module.exports = app;