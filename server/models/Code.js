const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let codeSchema = new Schema ({
    title: {type: String},
    content: {type: String},
    user: {type: String}
});

module.exports = mongoose.model("Code", codeSchema);