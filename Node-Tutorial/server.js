var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World! I am learning Express.')
})

app.get('/profile', function (req, res) {
  res.send('Hello user , how are you doing ?')
})

app.get('/contact', function (req, res) {
  res.send('This is my contact page.')
})

app.get('/about/:p', function (req, res) {
  res.send(`About section for ${req.params.p}`)
})

app.get('/blog', function (req, res) {
  res.send('This is my first blog.')
})

app.get('/blog/react-tutorial/1', function (req, res) {
  res.send('This is a quick React Tutorial 1.')
})

app.get('/blog/:title/:article', function (req, res) {
  res.send(`This is a quick Tutorial on ${req.params.title} and ${req.params.article}`)
})

app.listen(3000)


// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World, My name is Gladden 123</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

