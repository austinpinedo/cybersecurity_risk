// Minimal Node/Express server that serves the login page and
// re-validates the login data on the server side.
//
// Run with:  node server.js
// Then open: http://localhost:3000

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: 'server: all fields are required' });
  }

  if (!email.includes('@')) {
    return res.json({ message: 'server: email must contain "@"' });
  }

  if (password.length < 8) {
    return res.json({ message: 'server: password must be at least 8 characters' });
  }

  return res.json({ message: 'server: input passed validation for ' + email });
});

app.listen(3000, () => {
  console.log('login form running at http://localhost:3000');
});
