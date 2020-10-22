const router = require("express").Router()
const spellController = require("../controllers/spellController")

router.route("/")
    .get(spellController.findAll)
    .post(spellController.createNewSpell)

    router.route("/:class")
    .get(spellController.findClassSpells)
module.exports = router