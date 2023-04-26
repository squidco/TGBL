const mongoose = require("mongoose");
const db = require("../../../models");
const axios = require("axios");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spellBooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var seedList = require("./seedLists/srd.json")

var beegSpellList = require("./seedLists/beegSpellList.json")

function testConvert() {
  var spellList = ["Armor of Agythes"];

  spellList.forEach((el) => {
    var spellName = el.toLowerCase().replace(/ /g, "-");
    console.log(spellName);
  });
}

function convertShit() {
  var smolSpellList = [];
  seedList.forEach((element) => {
    var spellName = element.toLowerCase().replace(/ /g, "-");

    smolSpellList.push(spellName);
  });
  lookUpShit(smolSpellList);
}

function lookUpShit(list) {
  list.forEach((el) => {

    var URI = `https://www.dnd5eapi.co/api/spells/${el}/`
    var encodedURI = encodeURI(URI)

    axios
      .get(encodedURI)
      .then(function (res) {
        var newEntry = {
          spell_name: res.data.name,
          name: res.data.index,
          desc: res.data.desc,
          higher_level: res.data.higher_level,
          range: res.data.range,
          components: res.data.components,
          ritual: res.data.ritual,
          duration: res.data.duration,
          concentration: res.data.concentration,
          casting_time: res.data.casting_time,
          level: res.data.level,
          damage: res.data.damage,
          heal_at_slot_level: res.data.heal_at_slot_level,
          dc: res.data.dc,
          area_of_effect: res.data.area_of_effect,
          classes: res.data.classes,
        };
        enterThatShit(newEntry);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function enterThatShit(entry) {
  // console.log(entry);
  db.Spells.create(entry)
    .then((data) => {
      console.log(data.name)
      // console.log(data);
      process.exit(0);
    })
    .catch((err) => {
      // console.error(err);
      process.exit(1);
    });
}

db.Spells.deleteMany({});
convertShit();

// testConvert()