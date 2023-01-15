const db = require("../models")

//Needs CRUD operations

module.exports = {
    createCharacter: async function (req, res) {
        console.log("\n USER", req.user)
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id },
                { $addToSet: { characters: req.body } },
                { new: true, runValidators: true })
                res.json(user)
        } catch (error) {
            console.log(error)
        }
        res.status(200)
    },
    getSingleCharacter: function () {

    },
    getUsersCharacters: function () {

    },
    deleteCharacter: function () {

    }
}