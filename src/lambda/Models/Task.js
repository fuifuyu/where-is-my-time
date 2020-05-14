import mongoose from 'mongoose'

const taskScheme = new mongoose.Schema({
    name: String,
    deleted: Boolean
});

const Task = mongoose.model('Task',taskScheme);

export default Task;