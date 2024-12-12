const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: {
        type: String, maxlength: 30, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true, minLength: 8
    },
    tokens: [
        {
            token: { type: String, required: true},
        },
    ],

}, {
    timestamps: true,
    collection: 'users'
})

userSchema.pre('save', async function(next) {
    try {
        const user = this
        if (user.isModified('password')){
            user.password = await bcrypt.hash(user.password, 8)
            }
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET);
        user.tokens = {token};
    } catch (error) {
        console.log(`Ocorreu um ${error}`)
        next()
    }
    next()
})

module.exports = mongoose.model("User", userSchema)