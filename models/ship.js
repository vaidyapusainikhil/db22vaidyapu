// const mongoose = require("mongoose") 
// const shipSchema = mongoose.Schema({ 
// Company : String, 
// Cost : {type:Number,min:14000,max:40000},
// Colour : String 
// }) 
 
// module.exports = mongoose.model("Ship", 
// shipSchema) 
const mongoose = require("mongoose")
const fairydollSchema = mongoose.Schema({
Company: String,
cost: {type:Number,min:14000,max:40000},
Color: String,
} )
module.exports = mongoose.model("fairydoll",fairydollSchema)