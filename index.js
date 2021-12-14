const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');



//Connect to DB
mongoose.connect(process.env.DB_CONNECT,()=>
console.log("Connected to DB!")
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute);
app.use('/api/post',postRoute);


app.listen(3000,()=> console.log("Server up and running"));
