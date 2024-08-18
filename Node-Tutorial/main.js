const express = require('express');
const app = express();
const port = 3000;

let fruits = ['Apple', 'Banana', 'Orange']; // 1 , strawberry

app.use(express.text())

app.get('/', function (req, res) {
    res.send('Hi , ma chalu hogya hu!');
    console.log(__dirname);
})

app.get('/home', function (req, res) {
    res.sendFile('public/home.html',{root:__dirname});
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
    else{
        res.status(404).send('Fruit not found , try again.');
    }
})

app.delete('/fruits/:index', function (req, res) {
    const index = parseInt(req.params.index);
    let deletedFruit = fruits[index];
    fruits.splice(index,1);
    res.send(`Successfully Deleted fruit - ${deletedFruit}`);
})

//start the server 
app.listen(port, () => {
    console.log("Server started successfully.")
})