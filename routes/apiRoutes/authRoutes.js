const router = require("express").Router()
const authController = require("../../controllers/authController")

router.route("/login")
    .get(authController.login)

router.route("/signup")
    .post(authController.signUp)

module.exports = router