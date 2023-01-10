const mongoose = require("mongoose")

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    level: Number,
    highestSpellSlot: Number,
    numberOfSlots: [{
        id: Number,
        slots: Number
    }]
})

module.exports = mongoose.model("Character", CharacterSchema)