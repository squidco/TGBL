const mongoose = require("mongoose")


//This is a subdocument that exists on the User Model
const CharacterSchema = new mongoose.Schema({
    characterName: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    displayName: String,
    characterLevel: Number,
    highestSlot: Number,
    numberOfSlots: [{
        id: Number,
        slots: Number
    }]
})

module.exports = CharacterSchema