const mongoose = require("mongoose")

const CharacterSchema = new mongoose.Schema({
    playerName: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    playerLevel: Number,
    highestSlot: Number,
    numberOfSlots: [{
        id: Number,
        slots: Number
    }]
})

module.exports = CharacterSchema