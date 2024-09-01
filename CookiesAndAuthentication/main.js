const express = require('express')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')

const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

app.use(cookieParser());
const users = [
  {
    id: 1,
    username: 'gladden_r',
    password: '$2b$12$oDGnso8uu8oO32bh2KbbTu2IQxb4CKlOEM.WLihd8tkbBRX6rAErC'
  },
  {
    id: 2,
    username: 'john_s',
    password: '$2b$12$oMcsLLWDdfSeaiwlQzhI5.G7LaKLzEI.1WOGxd5wbYSAYl1NPq3q.'
  },
  {
    id: 3,
    username: 'jane_j',
    password: '$2b$12$PjTvzpJXOQqR1DtT2yZireuiyfNgHsDUM1BH3d0UGXqyGfGCCbpV.'
  },
  {
    id: 4, 
    username: 'alice_w',
    password: '$2b$12$wkvE0HUu/SH06AdbKEVw/uIFPeQIhs4N86B9UhW1dcOfwNMmdtIYK'
  },
  {
    id: 5,
    username: 'bob_b',
    password: '$2b$12$23G8E.AGWgy1oOz2CCBfgOQvz0Qx4RFt3rCioksrBfsDJuDcv8.ba'
  },
  {
    id: 6,
    username: 'charlie_j',
    password: '$2b$12$cI0HuzRq/rKHnuj24CWm1.scPE8wwqTTM1CLwo.zZvPH0BA46gACa'
  },
  {
    id: 7,
    username: 'david_g',
    password: '$2b$12$MQ7kBK5kTC.OrVJiIy8NpOi9RIasELELAN2FZlwZFaP7liRbVo1FO'
  },
  {
    id: 8,
    username: 'eve_m',
    password: '$2b$12$B6cxEQAh8BCIgQNz1Wa8BeUKIDTxEZq.LW.PUTEj9WPBsZ/69SjXC'
  },
  {
    id: 9,
    username: 'frank_d',
    password: '$2b$12$rBzXZ52qplOWJUWFp7YYO.rNHKeu63TEiqH7igwNF5ihzmnvSI9DG'
  },
  {
    id: 10,
    username: 'grace_r',
    password: '$2b$12$Co5SksokwqGf8zpXixyCeOZS8eUzOmwxoobqv6iE2t29FXOvrGNi2'
  }
];

function isAuthenticated(req,res,next){
  const user_id = req.cookies.user_id;
  if(!user_id){
    return res.status(401).json({message:'You are not an authenticated user'})
  }

  const user = users.find(u => u.id == user_id);
  if(!user){
    return res.status(401).json({message:'Invalid Cookie'})
  }

  next();
}


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Learning App!')
})

app.get('/profile', isAuthenticated, (req, res) => {
  const user = users.find(u=> u.id == req.cookies.user_id)

  res.json({username:user.username});
})

app.post('/updateProfile', isAuthenticated, async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u=> u.id == req.cookies.user_id);

  if(username)
    user.username = username;
  if(password)
    user.password = await bcrypt.hash(password,12);

  res.json({message:'Profile updated successfully!'})

})  

app.post('/forgot-password',(req, res) => {
  const { username } = req.body;
  const user = users.find(u => u.username === username)
  if(!user){
    return res.status(400).json({message:'Invalid Username!'})
  }
  const resetToken = uuidv4();

  res.json({message:`Password Reset Link - /reset-password/${resetToken}`})

})

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username)
  if(userExists){
    res.status(400).json({message:'Username Already Exists! Please Login or Register with new username.'})
  }

  const hashedPassword = await bcrypt.hash(password,12)
  newUser = {
    id: uuidv4(),
    username,
    password: hashedPassword
  };

  users.push(newUser);
  res.status(200).json({message:`New user created successfully - ${newUser.username}`})

})



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  //Find the user in dummy database
  const user = users.find(u => u.username === username)
  if(!user){
    return res.status(401).json({message:'Invalid Username'})
  }

  //Compare the user provide password with stored hashed password
  const isPasswordValid = await bcrypt.compare(password,user.password);
  if(!isPasswordValid){
    return res.status(401).json({message:'Invalid password'})
  }
  //Store the cookie if valid user
  res.cookie('user_id', user.id);
  
  res.json({message:'Login Successful'});

})

app.get('/dashboard', isAuthenticated , (req, res) => {
  res.json({message:'Hello! Welcome to the Learning App Dashboard'})
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.json({message:'Logout Successful'})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})