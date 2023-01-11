const router = require("express").Router()
const spellRoutes = require("./spellRoutes")
const authRoutes = require("./authRoutes")

router.use("/spells", spellRoutes)
router.use("/auth", authRoutes)

module.exports = router