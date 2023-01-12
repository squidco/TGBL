const db = require("../models")
const { signToken } = require("../utils/auth")

module.exports = {
    signUp: async function (req, res) {
        // console.log(req)
        try {
            const newUser = await db.Users.create({ email: req.body.email, password: req.body.password })

            const token = signToken(newUser)

            console.log("\n SIGNUP", token)

            res.json(newUser)
            return { token, newUser }
        } catch (error) {
            res.json(error)

        }

    },

    login: async function (req, res) {
        try {
        const user = await db.Users.findOne({ email: req.body.email })
        if (!user) {
            console.log("No user with that email was found.")
            res.status(404)
            return
        }

        const correctPassword = await user.checkPassword(req.body.password)

        if (!correctPassword) {
            console.log("Password is incorrect.")
        }

        //creates the jwt for the user
        const token = signToken(user)
        res.json(token)
        return { token, user }
    } catch(error) {
        console.log(error)
        res.status(400)
    }
    }
}