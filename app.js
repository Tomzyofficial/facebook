const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const app = express();
const publiDir = path.join(__dirname, 'public');
app.use(express.static(publiDir));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.render('index');
})
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
})
app.get('/profile', (req, res) => {
  res.render('profile');
})
app.get('/watch', (req, res) => {
  res.render('watch');
})
app.listen(3000, () => {
  console.log('App is listening on port 3000');
})