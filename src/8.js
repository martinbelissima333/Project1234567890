import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST route
app.post('/users', (req, res) => {
  // Create a new user in the database
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    // Save the new user to the database
    res.json({ message: 'User created!' });
  } else {
    // Return an error if validation fails
    res.status(400).json({ message: 'Username and password are required' });
  }
});

// PUT route
app.put('/users/:id', (req, res) => {
  // Update a user in the database
  const id = req.params.id;
  const username = req.body.username;
  const password = req.body.password;

  if (id && username && password) {
    // Save the updated user to the database
    res.json({ message: 'User updated!' });
  } else {
    // Return an error if validation fails
    res.status(400).json({ message: 'Id, username, and password are required' });
  }
});

// DELETE route
app.delete('/users/:id', (req, res) => {
  // Delete a user from the database
  const id = req.params.id;

  if (id) {
    // Save the updated user to the database
    res.json({ message: 'User deleted!' });
  } else {
    // Return an error if validation fails
    res.status(400).json({ message: 'Id is required' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});