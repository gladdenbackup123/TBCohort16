const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const filePath = path.join('C:\Users\gladd\OneDrive\Desktop\TBCohort16\QuotesAPI','../data/quotes.json');

app.get('/', (req, res) => {
  res.send('Welcome to Quotes Generator - API v1.0')
})  

app.get('/quotes', (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    res.status(200).json(quotes)
}) 

app.get('/quotes/random', (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    let index = Math.floor(Math.random()*quotes.length)
    let randomQuote = quotes[index]
    res.status(200).json(randomQuote)
}) 

app.get('/quotes/category/:category', (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    const category = req.params.category
    const categoryQuotes = quotes.filter(q => q.category.toLowerCase()===category.toLowerCase())
    //error handling
    if(categoryQuotes.length==0)
        return res.status(404).json({message:'No qoutes found in this category'});

    res.status(200).json(categoryQuotes)
}) 

app.get('/quotes/author/:author', (req, res) => {
    const quotes = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    const author = req.params.author
    const authorQuotes = quotes.filter(q => q.author.toLowerCase()===author.toLowerCase())
    //error handling
    if(authorQuotes.length==0)
        return res.status(404).json({message:'No qoutes found for this author'});

    res.status(200).json(authorQuotes)
}) 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})