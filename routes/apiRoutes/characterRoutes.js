const router = require("express").Router()
const characterController = require("../../controllers/characterController")
const {authMiddleware} = require("../../utils/auth")

router.route("/:characterName")
    .get(authMiddleware, characterController.getSingleCharacter)
    .delete(authMiddleware, characterController.deleteCharacter)

router.route("/")
    .get(authMiddleware, characterController.getAllCharacters)
    .post(authMiddleware, characterController.createCharacter)


module.exports = router