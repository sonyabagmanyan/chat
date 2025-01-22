const {connectMongo, disconnectMongo} = require('../mongo/mongo.connect');
const mongoose = require("mongoose");
const {ModelImage, ModelVideo, ModelGif} = require("../mongo/mongo.model")
const logger = require("../logger")
const {hostOfServerWithGifs, hostOfServerWithVideos, hostOfServerWithImages} = require('./variables.config')
const fs = require("fs")
const path = require("path")

class Model{
static fileDir = path.join(__dirname, "../uploads/images")
// static async saveGif(data){
//     try {
//         connectMongo();
//         let fullName = hostOfServerWithGifs + "/" + Object.values(data)[0];
//         await ModelGif.create({[Object.keys(data)[0]] : fullName});
//         logger.info("Gif saved")
//     } catch (error) {
//         logger.info(error)
//     } finally{
//         disconnectMongo()
//     }
// }
// static async saveVideo(data){
//     try {
//         connectMongo();
//         let fullName = hostOfServerWithVideos + "/" + Object.values(data)[0];
//         await ModelVideo.create({[Object.keys(data)[0]] : fullName});
//         logger.info("Video saved")
//     } catch (error) {
//         logger.info(error)
//     } finally{
//         disconnectMongo()
//     }
// }
static async saveImage(data){
    try {
        connectMongo();
        let fullName = hostOfServerWithImages + "/" + Object.values(data)[0];
        await ModelImage.create({[Object.keys(data)[0]] : fullName});
        logger.info("Image saved")
    } catch (error) {
        logger.info(error)
    } finally{
        disconnectMongo()
    }
}

static async getImageList(){
    try {
        connectMongo();
       return await ModelImage.find({});    
    } catch (error) {
        logger.info(error)
    } finally{
        disconnectMongo()
    }
}
    static async deleteImage(data){
        try {
            connectMongo()
            const id = data.id;

            const result = await ModelImage.findByIdAndDelete(id);
            console.log(result,"swedrftgyhujikolkijuhygtfrdesedrfgtyhuj");
            
            const temp = result.name;
            const name = temp.split("/")[4];
            
            fs.unlinkSync(Model.fileDir + "/" + name)


        } catch (error) {
            logger.info(error)
        } finally{
            disconnectMongo()
        }
    }



}



module.exports = Model
