// 1. Import the express module
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Middleware: Parse incoming JSON requests
app.use(express.json());
// Now you can access req.body in POST requests

// 4. Define a port for your server
const PORT = 3000;

// 5. Basic GET route
// Visit http://localhost:3000/ in your browser
app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

// 6. GET route with a parameter
// Try visiting http://localhost:3000/hello/YourName
app.get('/hello/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});

// 7. GET route with a query string
// Try http://localhost:3000/search?term=express
app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send(`You searched for: ${term}`);
});

// 8. POST route to receive data
// Use Postman or curl to POST JSON to http://localhost:3000/data
app.post('/data', (req, res) => {
  // req.body contains the parsed JSON data
  res.json({ message: 'Data received!', yourData: req.body });
});

// 9. Example of sending JSON response
app.get('/json', (req, res) => {
  res.json({ framework: 'Express', type: 'Backend', success: true });
});

// 10. 404 handler (for routes not found)
app.use((req, res) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// 11. Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

