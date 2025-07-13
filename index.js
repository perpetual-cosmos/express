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



// 6. Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

