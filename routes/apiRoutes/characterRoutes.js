const router = require("express").Router()
const characterController = require("../../controllers/characterController")
const {authMiddleware} = require("../../utils/auth")

router.route("/:characterName")
    .get(authMiddleware, characterController.getSingleCharacter)
    .post(authMiddleware, characterController.createCharacter)
    .delete()

router.route("/")
    .get(authMiddleware, characterController.getUsersCharacters)

module.exports = router