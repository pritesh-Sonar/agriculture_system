const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username : {
    type : String,
    required : true,
    unique : true
   },
   phone : {
    type : String,
    required : true
   },
   email : {
    type : String,
    required : true
   },
   password : {
    type : String,
    required : true
   },
   confirmpassword : {
    type : String,
    required : true
   }
})

// now we need to cfreate collection.

const Register = mongoose.model("Register", userSchema);

module.exports = Register;