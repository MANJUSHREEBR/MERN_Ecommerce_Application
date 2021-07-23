const express = require("express");
require('dotenv').config();
const app = express();//invoke express - instantiating
const mongoose = require('mongoose');
//import routes
const userRoutes = require('./routes/user');


//db connection
mongoose.connect(
    process.env.DATABASE,
    {useNewUrlParser: true,
     useCreateIndex: true
    }
)
.then(()=> console.log("DB connected"))

mongoose.connection.on('error', err=>{
    console.log(`DB connecton error: ${err.message}`);
})
//routes middleware
app.use('/api',userRoutes);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
});
