const express = require('express');

const app = express();
const PORT = 3000;

const requestLogger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); 
};

app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
