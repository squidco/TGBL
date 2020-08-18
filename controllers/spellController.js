const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Spells.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createNewSpell: function (req, res) {
    db.Spells.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
