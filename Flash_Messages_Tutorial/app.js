const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(session({
    secret: 'gladden123',
    resave: false,
    saveUninitialized: true,
}));


app.use(flash());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        message: req.flash('message'),
        error: req.flash('error')
    });
});

app.get('/payment', (req, res) => {
    res.render('payment', {
        message: req.flash('message'),
        error: req.flash('error')
    });
});

app.post('/submit', (req, res) => {
    const { username } = req.body;

    if (username) {
        req.flash('message', 'Form submitted successfully!');
    } else {
        req.flash('error', 'Username is required!');
    }
    res.redirect('/');
});


// app.post('/submit', (req, res) => {
//     const { amount } = req.body;

//     if (amount) {
//         req.flash('message', 'Payment Successfull!');
//     } else {
//         req.flash('error', 'Payment Failed!');
//     }
//     res.redirect('/');
// });


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});
