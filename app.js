const express = require('express');
const app = express();
const PORT = process.env.port || 4000;

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Cashly server is running!');
});

app.listen(Port, () => {
    console.log('Server is running in port ${PORT}');
});