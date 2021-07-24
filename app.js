const express = require("express");
require('dotenv').config();
const app = express();//invoke express - instantiating
const mongoose = require('mongoose');
//import routes
const userRoutes = require('./routes/user');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

//db connection
mongoose.connect(
    process.env.DATABASE,
    {useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true
    }
)
.then(()=> console.log("DB connected"))

mongoose.connection.on('error', err=>{
    console.log(`DB connecton error: ${err.message}`);
})
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(expressValidator());
//routes middleware


app.use('/api',userRoutes);




//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.raw());
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
});
