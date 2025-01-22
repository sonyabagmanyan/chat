const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name : {type : String}
})


const ModelImage = mongoose.model("Image", Schema)
const ModelVideo = mongoose.model("Video", Schema)
const ModelGif = mongoose.model("Gif", Schema)


module.exports = {ModelImage, ModelVideo, ModelGif};