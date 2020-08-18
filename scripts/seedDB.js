const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spellBooks");

const spellsSeed = [
  {
    spell_name: "Abra Cadabra",
    name: "abracadabra",
    desc: "Bamboozles fools",
    higher_level: "Bamboozles smart fools",
    range: "Spitting Distance",
    components: ["S", "A"],
    ritual: false,
    duration: "10 seconds",
    concentration: false,
    casting_time: "Instant",
    level: "9",
    damage: {
      damage_type: "mindfuck",
      damage_at_slot_level: ["1D8", "2D8"],
    },
    dc: {
      dc_type: "Wisdom",
      dc_success: "Impossible",
    },
    area_of_effect: {
      shape: "cube",
      size: "15 football fields",
    },
    classes: ["Bard", "Wizard", "Pissboy"],
  },
];

db.Spells.deleteMany({})
  .then(() => db.Spells.create(spellsSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
