const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sequenceSchema = schema({
    _id:{
      type:String,
      required:true
    },
    sequence_value : {
        type:Number,
        default:0
    }
});

module.exports = mongoose.model('sequence',sequenceSchema);