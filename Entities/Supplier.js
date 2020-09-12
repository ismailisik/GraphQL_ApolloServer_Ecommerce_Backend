const mongoose = require('mongoose');
const schema = mongoose.Schema;

const supplierSchema = new schema({
	companyName:{
		type:String,
		required:true,
	},
	address:{
		type:String,
		required:true,
	},
	phone:{
	    type:String,
		required:true
	},
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('supplier',supplierSchema);
