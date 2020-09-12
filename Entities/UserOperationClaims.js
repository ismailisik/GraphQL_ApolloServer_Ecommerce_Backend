const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userOperationClaimsSchema = schema({
   userId:{
       type:String,
       required:true
   },
    operationClaimId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('userOperationClaims',userOperationClaimsSchema);