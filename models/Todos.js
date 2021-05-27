const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	text: String,
	isCompleted: Boolean,
});

const Todos = mongoose.model('todos', TodoSchema);

module.exports = Todos;
