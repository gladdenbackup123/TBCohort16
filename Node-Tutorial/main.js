const express = require('express');
const fs = require('fs');
const birds = require('./routes/birds')
const blog = require('./routes/blog')

const app = express();
const port = 3000;

app.use('/birds', birds)
app.use('/blog', blog)
// app.use(express.text())
// app.use(express.static('public'))

//Middleware1
app.use((req, res, next) => {
    req.gladden = "Gladden OP in the chat!"
    console.log(req.headers)
    fs.appendFileSync("logs.txt",`Request time - ${Date.now()} \n`)
    console.log("m1")
    // if(true){
    //     res.send('Request Limit Exceeded');
    // }
    next()
})
//Middleware2
app.use((req, res, next) => {
    req.gladden = "Mona OP in the chat!"
    console.log('Method Type : ', req.method)
    console.log("m2")
    next()
})


let fruits = ['Apple', 'Banana', 'Orange']; // 1 , strawberry

app.get('/', function (req, res) {
    res.send('Hi , ma chalu hogya hu , postman OP !');
    console.log(__dirname);
})

app.post('/', function (req, res) {
    res.send('Post Request Successfull, postman OP');
    console.log(__dirname);
})

app.get('/home', function (req, res) {
    // res.sendFile('public/home.html', { root: __dirname });
    res.send(req.gladden);
})


app.get('/fruits', function (req, res) {
    res.send(fruits.join(' and '));
})

app.post('/fruits', function (req, res) {
    const newFruit = req.body;
    fruits.push(newFruit);
    res.send(`Added new fruit- ${newFruit}`);
})

app.put('/fruits/:index', function (req, res) {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < fruits.length) {
        const newFruit = req.body;
        fruits[index] = newFruit;
        res.send('Fruit updated successfully!');
    }
    else {
        res.status(404).send('Fruit not found , try again.');
    }
})

app.delete('/fruits/:index', function (req, res) {
    const index = parseInt(req.params.index);
    let deletedFruit = fruits[index];
    fruits.splice(index, 1);
    res.send(`Successfully Deleted fruit - ${deletedFruit}`);
})

//start the server 
app.listen(port, () => {
    console.log("Server started successfully.")
})