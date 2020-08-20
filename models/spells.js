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
  damage: {
    damage_type: String,
    damage_at_slot_level: Object,
  },
  dc: {
    dc_type: String,
    dc_success: String
  },
  area_of_effect: {
    shape: String,
    size: String,
  },
  classes: [Object],
});

module.exports = mongoose.model("Spell", SpellSchema);
