const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new schema({
	_id:{
		type:Number,
		required:true
	},
	name:{
		type:String,
		required:true,
		unique:true
	},
	description:{
		type:String,
		required:false
	}
});

module.exports = mongoose.model('category',categorySchema);