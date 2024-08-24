const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About section of blogs')
})

router.get('/money', (req, res) => {
    res.send('This is blog on money')
})

module.exports = router