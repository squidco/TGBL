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
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

convertShit();
