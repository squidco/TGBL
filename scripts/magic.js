const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");

var beegSpellList = ["Thunderwave"];

function convertShit() {
  var smolSpellList = [];
  beegSpellList.forEach((element) => {
    var spellName = element.toLowerCase().replace(" ", "-");

    smolSpellList.push(spellName);
  });
  lookUpShit(smolSpellList);
}

function lookUpShit(list) {
  console.log(list);
  list.forEach((el) => {
    axios
      .get(`https://www.dnd5eapi.co/api/spells/${el}/`)
      .then(function (res) {
        console.log(res);
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
          damage: {
            damage_type: res.data.damage.damage_type.name,
            damage_at_slot_level: res.data.damage.damage_at_slot_level,
          },
          dc: {
            dc_type: res.data.dc.dc_type.name,
            dc_success: res.data.dc.dc_success,
          },
          area_of_effect: {
            shape: res.data.area_of_effect.type,
            size: res.data.area_of_effect.size,
          },
          classes: res.data.classes,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function enterThatShit() {}

convertShit();
