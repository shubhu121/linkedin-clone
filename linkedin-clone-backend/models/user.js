const mongoose = require("mongoose");

// 1. crete a schema
// 2. convert the schema to a model

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    experiences: [{
        type: String,
    },
],
    projects: [{
        type: String,
    },
],

    skills: [{
        type: String,
    },
],  

});


const User = mongoose.model("User",UserSchema);

module.exports = User;