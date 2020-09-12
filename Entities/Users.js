const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usersSchema = schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Status:{
        type:Number,
        default:1
    },
    BirthDate:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Claims:{
        type:[Number],
        default: [2]
    }
});

module.exports = mongoose.model('users',usersSchema);