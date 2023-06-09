const router = require("express").Router()
const authController = require("../../controllers/authController")
const {authMiddleware} = require("../../utils/auth")


router.route("/login")
    .post(authController.login)

router.route("/checkauth")
    .post(authMiddleware, authController.checkAuth)

router.route("/signup")
    .post(authController.signUp)

module.exports = router