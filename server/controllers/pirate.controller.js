const { Pirate } = require("../models/pirate.models");

module.exports.list = (req,res) => {
    Pirate.find({}).collation({locale:"en", strength: 2}).sort({pirateName: 1})
        .then(pirates => {
            res.json(pirates);
        })
        .catch(err => {
            res.status(400).json(err);
        });

}
module.exports.create = (req,res) => {
    Pirate.create(req.body)
        .then(pirate => {
            console.log(pirate);
            res.json(pirate)
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.detail = (req,res) => {
    const {id} = req.params;
    Pirate.findOne({ _id: id })
        .then(pirate => {
            res.json(pirate)
        })
        .catch(err => {
            res.status(400).json(err)
        })

}

module.exports.update = (req,res) => {
    const { id } = req.params;
    Pirate.updateOne( {_id: id},req.body, { runValidators: true })
        .then(updatedPirate => {
            res.json(updatedPirate)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.delete = (req,res) => {
    const { id } = req.params;
    Pirate.deleteOne( {_id: id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}