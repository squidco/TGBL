const mongoose = require("mongoose")
//package to encrypt password
const bcrypt = require("bcrypt")

//character subdocument
const characterSchema = require("./Character")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: true
    },
    characters: [characterSchema]
})

// encrypts user password before saving to database
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//checks if password entered for login matches the stored password
UserSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", UserSchema)