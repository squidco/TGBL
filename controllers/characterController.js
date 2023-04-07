const db = require("../models")

//Needs CRUD operations

module.exports = {
    createCharacter: async function (req, res) {
        //uses req.body to add a new character to the characters array of a user
        console.log(req.body)
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id },
                { $addToSet: { characters: req.body } },
                { new: true, runValidators: true })
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    },
    getSingleCharacter: async function (req, res) {
        //uses req.params.characterName to search for a character
        try {
            const user = await db.Users.findById(req.user._id)
            const charactersArr = user.characters
            charactersArr.forEach(element => {
                if (req.params.characterName === element.playerName) {
                    res.json(element)
                } else {
                    res.status(404).json("Character not found")
                }
            });
        } catch (error) {
            console.log(error)
        }
    },
    getAllCharacters: async function (req, res) {
        //uses req.user.id to get all of a user's characters
        try {
            const user = await db.Users.findById(req.user._id)
            const charactersArr = user.characters
            res.json(charactersArr)
        } catch (error) {
            console.log(error)
        }
    },
    deleteCharacter: async function (req, res) {
        //uses req.params.characterName to delete a character. Note that in the character subdoc it is referencing playerName
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id },
                { $pull: { characters: { playerName: req.params.characterName } } },
                { new: true, useFindAndModify: false })
            res.json(user.characters)
        } catch (error) {
            console.log(error)
        }
    },
    updateCharacter: async function (req, res) {
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id, "characters.playerName": req.params.characterName },
                { $set: { "characters.$": req.body } }
            )
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
}