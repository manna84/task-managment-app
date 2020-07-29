const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:
    {
        type:String,
        required:true
    },

    description:
    {
        type:String,
        required:true
    },

    dueDate:
    {
        type:Date,
        required:true
    },

    priority:
    {
        type:String,
        required:true
    },

    status:
    {
        type:String,
        default:"Open"
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    },

    // createdBy:
    // {

    // }

});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;