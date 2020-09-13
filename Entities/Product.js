const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = schema({
    _id:{
        type:Number,
        required: true
    },
    productName:{
        type:String,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    category:{
        type:Number,
        required:true
    },
    supplier:{
        type:Number,
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