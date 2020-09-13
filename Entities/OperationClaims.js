const mongoose = require('mongoose');
const schema = mongoose.Schema;

const operationClaimsSchema = schema({
   _id:{
     type:Number,
     required: true
   },
   name:{
       type:String,
       required: true
   }
});

module.exports = mongoose.model('operationClaims',operationClaimsSchema);