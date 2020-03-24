const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/piratedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Established a connection to the pirates database")
    })
    .catch(err => {
        console.log("There's been an error while connecting to the database",err)
    });