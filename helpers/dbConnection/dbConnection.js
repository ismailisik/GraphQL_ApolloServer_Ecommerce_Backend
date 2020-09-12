const mongoose = require('mongoose');

module.exports= () => {
	mongoose.connect('mongodb://localhost/EcommerceDb',{useNewUrlParser: true ,useUnifiedTopology: true})
		.then(()=>{
			console.log('MongoDb Connected');
		}).catch((err)=>{
			console.log(err);
		});
};
