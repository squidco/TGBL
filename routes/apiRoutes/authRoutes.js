const router = require("express").Router()
const authController = require("../../controllers/authController")

router.route("/login")
    .post(authController.login)

router.route("/checkauth")
    .post(authController.checkAuth)

router.route("/signup")
    .post(authController.signUp)

module.exports = router