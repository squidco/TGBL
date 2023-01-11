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

    login: async function ({ email, password }) {
        // console.log(req)
        const user = db.User.findOne({ email })
        if (!user) {
            console.log("No user with that email was found.")
            return
        }
        console.log(user)

        const correctPassword = user.checkPassword(password)

        if (!correctPassword) {
            console.log("Password is incorrect.")
        }

        //creates the jwt for the user
        const token = signToken(user)

        return { token, user }
    }
}