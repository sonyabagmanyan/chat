const Model = require('./model')
const logger = require("../logger");



class Controller {
// static async uploadGif(req, res){
//     try {
//         res.send(req.file.filename);
//     } catch (error) {
//         logger.info(error);
//     }
// }
// static async saveGif(req, res){
//     try {
//         const data = req.body;
//         await Model.saveGif(data);
//         res.send("Gif saved")
//     } catch (error) {
//         logger.info(error)
//     }
// }
// static async uploadVideo(req, res){
//     try {
//         res.send(req.file.filename);
//     } catch (error) {
//         logger.info(error);
//     }
// }
// static async saveVideo(req, res){
//     try {
//         const data = req.body;
//         await Model.saveVideo(data);
//         res.send("Video saved")
//     } catch (error) {
//         logger.info(error)
//     }
// }
static async uploadImage(req, res){
    try {
        res.send(req.file.filename);
    } catch (error) {
        logger.info(error);
    }
}
static async saveImage(req, res){
    try {
        const data = req.body;
        await Model.saveImage(data);
        res.send("Image saved")
    } catch (error) {
        logger.info(error)
    }
}
static async getImageList(req, res){
    try {
        
        const result = await Model.getImageList();
        
        res.send(result);
    } catch (error) {
        logger.info(error)

    }
}

static async deleteImage(req, res){
    try {
        const data = req.body;
        const id = await Model.deleteImage(data);
        res.send("Image deleted",id)
    } catch (error) {
        logger.info(error)
    }
}

}

module.exports = Controller