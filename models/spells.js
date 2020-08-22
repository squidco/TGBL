const mongoose = require("mongoose");

const SpellSchema = new mongoose.Schema({
  spell_name: String,
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  desc: [String],
  higher_level: [String],
  range: String,
  components: [String],
  ritual: Boolean,
  duration: String,
  concentration: Boolean,
  casting_time: String,
  level: String,
  damage: Object,
  heal_at_slot_level: Object,
  dc: Object,
  area_of_effect: Object,
  classes: [Object]
});

module.exports = mongoose.model("Spell", SpellSchema);
