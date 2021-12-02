const mongoose = require("mongoose") 
const shipSchema = mongoose.Schema({ 
 Company: String, 
 Cost: Number, 
 Colour: String
}) 
 
module.exports = mongoose.model("Ship", shipSchema) 