const mongoose = require("mongoose");
const db = require("../models");

var beegSpellList = [];
var smolSpellList = [];

function convertShit() {
  beegSpellList.forEach((element) => {
    var spellName = element.toLowerCase().replace(" ", "-");

    smolSpellList.push(spellName);
  });
}

convertShit();

console.log(smolSpellList);
