// Dependencies
const express = require('express');

// App uses express
const app = express();


// Creating the port
const PORT = process.env.PORT || 3001;

// Asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// Sets up express app to handle data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to route files
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/api-routes'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/html-routes'))
);


// App listener - starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);