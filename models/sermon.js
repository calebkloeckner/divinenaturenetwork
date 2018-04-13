const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sermonSchema = new Schema ({
        title: { type: String, required: true },
        speaker: { type: String, required: true },
        link: { type: String, required:true }

});

const Sermon = mongoose.model("sermons", sermonSchema);

module.exports = Sermon;