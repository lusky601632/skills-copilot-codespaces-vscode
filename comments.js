// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array to store comments
const comments = [
    { name: 'John', comment: 'Hello' },
    { name: 'Mary', comment: 'Hi' }
];

// Set the static files directory
app.use(express.static('public'));

// Set the view engine
app.set('view engine', 'ejs');

// Set the route for the index page
app.get('/', (req, res) => {
    res.render('index', { comments: comments });
});

// Set the route for the comments page
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});