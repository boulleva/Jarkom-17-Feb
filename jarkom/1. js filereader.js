const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});