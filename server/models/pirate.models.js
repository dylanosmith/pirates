const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [
            true,
            "Pirate name is required"
        ],
        minlength: [1, "Name is required"]
    },
    image: {
        type: String,
        required: [
            true,
            "Image url is required"
        ]
    },
    treasures: {
        type: Number,
        required: [
            true,
            "Number of treasure chests is required"
        ]
    },
    phrase:{
        type: String,
        required: [
            true,
            "Pirate Catch Phrase is required"
        ]
    },
    position: {
        type: String,
        required: [
            true,
            "Pirate crew position is required"
        ]
    },
    pegLeg: {
        type: Boolean,
        required: true
    },
    eyePatch: {
        type: Boolean,
        required: true
    },
    hookHand: {
        type: Boolean,
        required: true
    }
    
}, {timestamps: true})

module.exports.Pirate = mongoose.model("Pirate",PirateSchema);