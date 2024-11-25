const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String, maxlength: 30, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
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
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');
        user.tokens = {token};
    } catch (error) {
        console.log(`Ocorreu um ${error}`)
        next()
    }
    next()
})

userSchema.methods.generateAuthToken = async () => {
    const user = this;

}


userSchema.statics.finByCredentials = async (email, password) => {
    const user  = await User.findOne({ email });
    console.log(user)
    const isPasswordMatch = await bcrpt.compare(password, user.password)
    if(!user || !isPasswordMatch) {
        throw new Error ({ error: 'Login inválido!'})
    } 
    return user;
}

module.exports = mongoose.model("User", userSchema)