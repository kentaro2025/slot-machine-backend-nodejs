const express = require('express'); // Import Express
const app = express(); // Create an instance of Express
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

const morgan = require('morgan');
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000; // Define the port

app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

const signalsRoutes = require('./routes/signals');
app.use('/api/start-signal', signalsRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
