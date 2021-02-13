const mongoose = require('mongoose')

function connection() {
    mongoose.connect("mongodb://localhost/fseletro", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDB conectou com sucesso!")
    })

    .catch(() => {
        console.log(error)
    })
}

module.exports = connection()