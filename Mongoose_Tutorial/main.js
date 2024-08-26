import mongoose from "mongoose";
import express from "express";
import Todo from "./models/todo.js";

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const newTodo = new Todo({title:"Complete Assignment 1",desc:"Finish the React Assignment",isDone:false,days:3})
    newTodo.save()
    res.send('Hello World!')
})

app.get('/task', (req, res) => {
    const newTodo = new Todo({title:"Bhai Jhadu maro",desc:"Ek haath se jhadu maro",isDone:false,days:1})
    newTodo.save()
    res.send('New Task Added to DB')
})

app.get('/todo', async (req, res) => {
    let todo = await Todo.findOne({title:"Bhai Jhadu maro"});
    console.log(todo);
    res.json({title:todo.title , desc:todo.desc, days:todo.days} );
    // res.send('hi this is todo')
})


app.get('/user', (req, res) => {
    res.send('Hello User!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})