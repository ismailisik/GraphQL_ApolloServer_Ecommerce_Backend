const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userOperationClaimsSchema = schema({
   userId:{
       type:Number,
       required:true
   },
    operationClaimId:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('userOperationClaims',userOperationClaimsSchema);