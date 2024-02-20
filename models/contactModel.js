const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please add contact name"]
    },
    age:{
        type: Number,
        require: [true, "Please add your age"]
    },
    phone:{
        type: Number,
        require: [true, "Please add your phone number"]
    },
    email:{
        type: String,
        require: [true, "Please add your email"]
    },
}, {timestamps: true})

module.exports = mongoose.model("Contact", contactSchema)
