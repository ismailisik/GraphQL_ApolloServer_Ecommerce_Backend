const mongoose = require('mongoose');
const schema = mongoose.Schema;

const supplierSchema = new schema({
	_id:{
		type:Number,
		required: true
	},
	companyName:{
		type:String,
		required:true,
		unique:true,
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
