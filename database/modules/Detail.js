const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
const CropSchema= new mongoose.Schema([{
    audio:String,
    Climate:String,
    Description1:String,
    Image1:String,
    Name1:String,
    video1:String,  
    Description2:String,
    Image2:String,
    Name2:String,
    video2:String,  
    Description3:String,
    Image3:String,
    Name3:String,
    video3:String,  
    Description4:String,
    Image4:String,
    Name4:String,
    video4:String,  
    Description:String,
    Image:String,
    Name:String,
    Soil:String
  }]);

const Crop = mongoose.model("Crop",CropSchema)

module.exports = Crop