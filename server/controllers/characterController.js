const db = require("../models")

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
            res.status(error)
        }
    },
    getSingleCharacter: async function (req, res) {
        //uses req.params.characterName to search for a character
        try {
            const user = await db.Users.findById(req.user._id)
            const charactersArr = user.characters
            charactersArr.forEach(element => {
                if (req.params.characterName === element.characterName) {
                    res.json(element)
                } 
            });
        } catch (error) {
            console.log(error)
            res.status(error)
        }
        // I have been informed that I should use an aggregate to get this info without the for loop
        // Just have to implement it

        // My attempt at searching for a specific subdocument based off a property that isn't _id
        // You can do user.characters.id(idOfSubDocGoesHere) but I wanted to search based off of the characterName property
        // try {
        //     const user = await db.Users.findOne({ _id: req.user._id }, function (err, user) {
        //         console.log("INSIDE QUERY", user)
        //     })
        //     console.log("OUTSIDE QUERY", user)
        // } catch (error) {
        //     console.log(error)
        // }
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
        //uses req.params.characterName to delete a character. Note that in the character subdoc it is referencing characterName
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id },
                { $pull: { characters: { characterName: req.params.characterName } } },
                { new: true, useFindAndModify: false })
            res.json(user.characters)
        } catch (error) {
            console.log(error)
        }
    },
    updateCharacter: async function (req, res) {
        try {
            const user = await db.Users.findOneAndUpdate(
                { _id: req.user._id, "characters.characterName": req.params.characterName },
                { $set: { "characters.$": req.body } },
                {new: true, useFindAndModify: false}
            )
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
}