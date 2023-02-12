const jwt = require("jsonwebtoken")

const secret = "super the secret"
const expiration = "24h"

module.exports = {
    authMiddleware: function (req, res, next) {
        //looks for token in multiple parts of the request
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.headers.authorization) {
            token = token.split(" ").pop().trim()
        }

        if (!token) {
            res.status(403).json("MISSING AUTH TOKEN")
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration })
            req.user = data
        } catch (error) {
            console.log("\n INVALID TOKEN", error)
            return res.status(400).json("INVALID TOKEN")
        }

        next()
    },
    routeMiddleware: function (token) {
        try {
            jwt.verify(token, secret, { maxAge: expiration })
            return true
        } catch(error){
            console.log(error)
        }
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id }

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
}