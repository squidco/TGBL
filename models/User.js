const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        match: [/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/, "is invalid"]
    },
    password: String,
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character"
    }]
})

// encrypts user password before saving to database
UserSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("User", UserSchema)