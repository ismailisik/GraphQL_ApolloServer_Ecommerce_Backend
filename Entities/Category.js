const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new schema({
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