let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyTasker');
let schema = mongoose.Schema(
    {
        content:{
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model(
    'MyTasker', schema
)