const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()
const port = 3000


app.post('/login', (req, res) => {
    const {username,password} = req.body;
    if(username!=="admin" || password!=="admin"){
        return res.status(401).send('Invalid username or password');
    }

    const sessionId = uuidv4(); //'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    res.set('Set-Cookie',`session=${sessionId}`)
    res.send('success')
})