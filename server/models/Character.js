const mongoose = require("mongoose")
const SpellSchema = require("./Spell")

//This is a subdocument that exists on the User Model
const CharacterSchema = new mongoose.Schema({
    characterName: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    characterLevel: Number,
    highestSlot: Number,
    numberOfSlots: [{
        id: Number,
        slots: Number
    }],
    hitPoints: {
        maxHitPoints: Number,
        currentHitPoints: Number,
        maxTemporaryHitPoints: Number,
        currentTemporyHitPoints: Number
    },
    spellBook: {
        cantrips: [SpellSchema],
        levelOne: [SpellSchema],
        levelTwo: [SpellSchema],
        levelThree: [SpellSchema],
        levelFour: [SpellSchema],
        levelFive: [SpellSchema],
        levelSix: [SpellSchema],
        levelSeven: [SpellSchema],
        levelEight: [SpellSchema],
        levelNine: [SpellSchema]
    }
})

module.exports = CharacterSchema