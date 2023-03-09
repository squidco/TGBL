const db = require("../models")
const { signToken, routeMiddleware } = require("../utils/auth")


// It doesn't seem like I need the whole Route Guard function
// I can use the auth service alone and if they have an invalid token
// They will be redirected to login again





module.exports = {
    signUp: async function (req, res) {
        // console.log(req)
        try {
            const newUser = await db.Users.create({ email: req.body.email, password: req.body.password })

            const token = signToken(newUser)

            console.log("\n SIGNUP", token)

            res.json(newUser)
        } catch (error) {
            res.json(error)
        }

    },
    checkAuth: function (req, res) {
        return res.status(200).json({ message: "TOKEN VERIFIED" })
    },
    login: async function (req, res) {
        try {
            const user = await db.Users.findOne({ email: req.body.email })
            if (!user) {
                console.log("No user with that email was found.")
                return res.status(404)
            }

            const correctPassword = await user.checkPassword(req.body.password)

            if (!correctPassword) {
                console.log("Password is incorrect.")
                return res.status(401).json("Password is incorrect.")
            }

            //creates the jwt for the user
            const token = signToken(user)
            res.json({ user, token })
        } catch (error) {
            console.log(error)
            res.status(400)
        }
    }
}