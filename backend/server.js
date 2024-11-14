const app = require('./app'); // Import the Express app
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// MongoDB Connection
mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1); // Exit process if DB connection fails
    });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});