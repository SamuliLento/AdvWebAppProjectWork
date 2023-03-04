const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    title: {type: String},
    content: {type: String},
    user: {type: String}
});

module.exports = mongoose.model("Comment", commentSchema);