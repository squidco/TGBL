const mongoose = require("mongoose");
const SpellSchema = require("./Spell");

//This is a subdocument that exists on the User Model
const CharacterSchema = new mongoose.Schema({
  characterName: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  stats: {
    strength: {
        type: Number,
        default: 8
    },
    dexterity: {
        type: Number,
        default: 8
    },
    constitution: {
        type: Number,
        default: 8
    },
    wisdom: {
        type: Number,
        default: 8
    },
    intelligence: {
        type: Number,
        default: 8
    },
    charisma: {
        type: Number,
        default: 8
    },
  },
  characterLevel: { type: Number, default: 1 },
  classes: [
    {
      name: { type: String, default: "Fighter" },
      level: { type: Number, default: 1 },
    },
  ],
  highestSlot: Number,
  armorClass: Number,
  inventory: [Object],
  speed: { type: Number, default: 30 },
  deathSaves: {
    fails: { type: Number, min: 0, max: 3 },
    successes: { type: Number, min: 0, max: 3 },
  },
  proficiencyBonus: { type: Number, default: 2 },
  numberOfSlots: [
    {
      id: Number,
      slots: Number,
    },
  ],
  hitPoints: {
    maxHitPoints: Number,
    currentHitPoints: Number,
    maxTemporaryHitPoints: Number,
    currentTemporyHitPoints: Number,
    shapeshiftedHitPoints: Number,
    currentShapeshiftedHitPoints: Number,
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
    levelNine: [SpellSchema],
  },
});

module.exports = CharacterSchema;
