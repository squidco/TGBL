const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    class_name: {
        type: String,
        lowercase: true,
    }
})

module.exports = mongoose.model("Class", ClassSchema)