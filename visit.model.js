var { Schema, model, SchemaTypes } = require('mongoose')

var Visit = new Schema({
    visitor: SchemaTypes.String
})


module.exports = model("Visit", Visit)