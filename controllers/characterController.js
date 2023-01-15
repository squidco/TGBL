const db = require("../models")

//Needs CRUD operations

module.exports = {
    createCharacter: async function (req, res) {
        //uses req.body to add a new character to the characters array of a user
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
    getSingleCharacter: async function (req, res) {
        //uses req.params.characterName to search for a character
        try {
            const user = await db.Users.findById(req.user._id)
            const charactersArr = user.characters
            charactersArr.forEach(element => {
                if (req.params.characterName === element.playerName) {
                    res.json(element)
                }
            });
        } catch (error) {
            console.log(error)
        }
    },
    getAllCharacters: async function (req, res) {
        try {
            const user = await db.Users.findById(req.user._id)
            const charactersArr = user.characters
            res.json(charactersArr)
        } catch (error) {
            console.log(error)
        }
    },
    deleteCharacter: function (req, res) {

    }
}