const express = require("express");
require('dotenv').config();
const app = express();//invoke express - instantiating
const mongoose = require('mongoose');
//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
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
app.use(cors());
//routes middleware


app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);



//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.raw());
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
});
