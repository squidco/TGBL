const jwt = require("jsonwebtoken")
require("dotenv").config()
const expiration = "24h"

module.exports = {
    authMiddleware: function (req, res, next) {
        //looks for token in multiple parts of the request
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.headers.authorization) {
            token = token.split(" ").pop().trim()
        }

        if (!token) {
            return res.status(403).json({ message: "MISSING AUTH TOKEN" })
        }

        try {
            const { data } = jwt.verify(token, process.env.SECRET, { maxAge: expiration })
            req.user = data
        } catch (error) {
            console.log("\n INVALID TOKEN", error)
            return res.status(400).json({ message: "INVALID TOKEN" })
        }


        next()
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id }

        return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration })
    }
}