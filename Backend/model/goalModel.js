const moongose = require('mongoose');

const goalsSchema = moongose.Schema({
    text:{
        type:String,
        required :[true,"please add a text"]
    },
},{
    timestamps:true
}) 

module.exports = moongose.model('Goal',goalsSchema)