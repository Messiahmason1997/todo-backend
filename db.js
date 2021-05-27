const mongoose = require('mongoose');

let isConnected = false;
const connectionString =
	'mongodb+srv://Linsen:zls18350023315@cluster0.e8s3e.mongodb.net/todolist';

const connectToDB = () => {
	if (isConnected) {
		console.log('Connection established, using existing connection');
		return Promise.resolve();
	}

	console.log('Using new database connection');

	return mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((db) => {
			isConnected = db.connections[0].readyState;
			console.log('Connection Success');
		})
		.catch((e) => console.log(e));
};

module.exports = connectToDB;
