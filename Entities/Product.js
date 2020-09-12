const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = schema({
    productName:{
        type:String,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    quantityPerUnit:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('product',productSchema);