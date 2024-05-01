const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
const ProductSchema=  new mongoose.Schema({
    //_id:Number,
    Image:{
        type: String,
        },
    Name:{
        type:String ,
        require:true
    },    
    Varieties:{
        type:String ,
    },
    Size:{
        type:String,
        },
    ModeOfAction:{
        type: String,
    },
    TargetCrops:{
        type: String,
    },
    TargetPest:{
        type:String,
    },
    Packaging:{ 
        type:String,
    },
    ManufactureDate:{
        type:String,
    },
    ExpiryDate:{
        type:String,
    },
    ProductType:{
    type:String 
    },
    Price:{
    type:Number
    }
});

const Product=mongoose.model("Product",ProductSchema)

module.exports = Product;