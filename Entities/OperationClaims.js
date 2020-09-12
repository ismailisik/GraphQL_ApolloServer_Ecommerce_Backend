const mongoose = require('mongoose');
const schema = mongoose.Schema;

const operationClaimsSchema = schema({
   name:{
       type:String,
       required:true
   }
});

module.exports = mongoose.model('operationClaims',operationClaimsSchema);