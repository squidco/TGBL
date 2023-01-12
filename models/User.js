const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        match: [/.+@.+\..+/, "is invalid"]
    },
    password: {
        type: String,
        lowercase: true,
        required: true
    },
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character"
    }]
})

// encrypts user password before saving to database
UserSchema.pre("save", async function (next) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
})

UserSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", UserSchema)