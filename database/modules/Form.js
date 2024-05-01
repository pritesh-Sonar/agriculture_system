const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
const OrderSchema=  new mongoose.Schema({
    //_id:Number,
    Pro_name:{
        type: String,
        },
    Pro_price:{
        type:String ,
        require:true
    },    
    Pro_Quantity:{
        type:String ,
    },
    Pro_pack:{
        type:String,
        },
    email:{
        type: String,
    }   
});

const Order=mongoose.model("Order",OrderSchema)

module.exports = Order;