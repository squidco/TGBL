const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spellBooks");

const spellsSeed = [
  {
    spell_name: "Abra Cadabra",
    name: "abracadabra",
    desc: ["Bamboozles fools"],
    higher_level: ["Bamboozles smart fools"],
    range: "Spitting Distance",
    components: ["S", "A"],
    ritual: false,
    duration: "10 seconds",
    concentration: false,
    casting_time: "Instant",
    level: "9",
    damage: {
      damage_type: "mindfuck",
      damage_at_slot_level: { "1": "2d8", "2": "3d8" },
    },
    dc: {
      dc_type: "Wisdom",
      dc_success: "Impossible",
    },
    area_of_effect: {
      shape: "cube",
      size: "15 football fields",
    },
    classes: [{ name: "Bard" }, { name: "Wizard" }, { name: "Pissboy" }],
  },

  {
    spell_name: "Thunderwave",
    name: "thunderwave",
    desc: [
      "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
      "In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    ],
    range: "Self",
    components: ["V", "S"],
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    damage: {
      damage_type: { name: "Thunder", url: "/api/damage-types/thunder" },
      damage_at_slot_level: {
        "1": "2d8",
        "2": "3d8",
        "3": "4d8",
        "4": "5d8",
        "5": "6d8",
        "6": "7d8",
        "7": "8d8",
        "8": "9d8",
        "9": "10d8",
      },
    },
    dc: {
      dc_type: { name: "CON", url: "/api/ability-scores/con" },
      dc_success: "half",
    },
    area_of_effect: { type: "cube", size: 15 },
    classes: [
      { name: "Bard", url: "/api/classes/bard" },
      { name: "Druid", url: "/api/classes/druid" },
      { name: "Sorcerer", url: "/api/classes/sorcerer" },
      { name: "Wizard", url: "/api/classes/wizard" },
    ],
  },

  {
    spell_name: 'Poison Spray',
    name: 'poison-spray',
    desc: [
      'You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a constitution saving throw or take 1d12 poison damage.',
      "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
    ],
    higher_level: undefined,
    range: '10 feet',
    components: [ 'V', 'S' ],
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 0,
    damage: {
      damage_type: { name: 'Poison', url: '/api/damage-types/poison' },
      damage_at_character_level: { '1': '1d12', '5': '2d12', '11': '3d12', '17': '4d12' }
    },
    dc: {
      dc_type: { name: 'CON', url: '/api/ability-scores/con' },
      dc_success: 'none'
    },
    area_of_effect: undefined,
    classes: [
      { name: 'Sorcerer', url: '/api/classes/sorcerer' },
      { name: 'Warlock', url: '/api/classes/warlock' },
      { name: 'Wizard', url: '/api/classes/wizard' }
    ]
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
