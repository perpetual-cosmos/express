# Express Beginner Learning Guide

This project is a hands-on, beginner-friendly introduction to [Express](https://expressjs.com/), a popular web framework for Node.js. The code in `index.js` is organized step-by-step with clear comments to help you learn the basics of building web servers and APIs.

## What You'll Learn
- How to set up an Express app
- How to use middleware (like JSON parsing)
- How to create GET and POST routes
- How to use route parameters and query strings
- How to send text and JSON responses
- How to handle 404 (not found) errors
- How to start and run your server

## How to Learn with This Project
1. **Read through `index.js`**
   - Each section is numbered and explained with comments.
   - Try to understand what each part does before running the code.
2. **Run the server**
   - Follow the steps below to start the server and test the routes.
3. **Experiment!**
   - Change the code, add your own routes, or modify responses to see what happens.
   - Use tools like [Postman](https://www.postman.com/) or your browser to interact with the server.

## How to Run This Project

### Prerequisites
- [Node.js](https://nodejs.org/) installed (version 12 or higher recommended)

### Steps
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd express
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the server**
   ```bash
   node index.js
   ```
4. **Try the following in your browser or Postman:**
   - `GET http://localhost:3000/` — Welcome message
   - `GET http://localhost:3000/hello/YourName` — Personalized hello
   - `GET http://localhost:3000/search?term=express` — Search with query string
   - `POST http://localhost:3000/data` — Send JSON data (body: `{ "foo": "bar" }`)
   - `GET http://localhost:3000/json` — See a JSON response
   - Try a route that doesn't exist to see the 404 handler

## Code Walkthrough
- **1. Import Express**: Brings the Express library into your project.
- **2. Create App**: Sets up your Express application.
- **3. Middleware**: Adds JSON parsing so you can handle POST data.
- **4. Port**: Sets the port number for your server.
- **5. Basic GET Route**: Responds to requests at the root URL.
- **6. Route Parameters**: Handles dynamic URLs like `/hello/:name`.
- **7. Query Strings**: Reads data from the URL, e.g., `/search?term=express`.
- **8. POST Route**: Receives and responds with JSON data.
- **9. JSON Response**: Shows how to send JSON from your server.
- **10. 404 Handler**: Catches requests to unknown routes.
- **11. Start Server**: Runs your app and listens for requests.

