const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema



const userSchema = new mongoose.Schema({
    salt: String,
    name:{
        type: String,
        trim: true,
        required:true,
        maxlength: 32
    }
   
},
   {timestamps: true}
);



module.exports = mongoose.model("User", userSchema);