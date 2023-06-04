const router = require("express").Router()
// const spellRoutes = require("./spellRoutes")
const authRoutes = require("./authRoutes")
const characterRoutes = require("./characterRoutes")

// router.use("/spells", spellRoutes)
router.use("/auth", authRoutes)
router.use("/characters", characterRoutes)

module.exports = router