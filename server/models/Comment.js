const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    content: {type: String},
    user: {type: String}
});

module.exports = mongoose.model("Comment", commentSchema);