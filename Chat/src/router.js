//external modules -------------------------------------------------------------
const express = require("express");
const router = express.Router();
const multer = require("multer");
//external modules -------------------------------------------------------------


//internal modules
const Controller = require("./controller");
const storageImage = require("../middlewares/image.upload.middleware");
const storageVideo = require("../middlewares/video.upload.middlware");
const storageGif = require("../middlewares/gif.upload.middleware");
//internal modules


//multer settings
const uploadGif = multer({storage : storageGif});
const uploadVideo = multer({storage : storageVideo});
const uploadImage = multer({storage : storageImage});
//multer settings


//uploading
// router.post("/uploadGif", uploadGif.single("user_gif"), Controller.uploadGif);  //dont use this
// router.post("/uploadvideo", uploadVideo.single("user_video"), Controller.uploadVideo);  //dont use this
router.post("/uploadImage", uploadImage.single("user_img"), Controller.uploadImage);
//uploading


//express requests
// router.post("/saveGif", Controller.saveGif);  //dont use this
// router.post("/saveVideo", Controller.saveVideo); //dont use this
router.post("/saveImage", Controller.saveImage);
router.get("/getImageList", Controller.getImageList);
router.delete("/deleteImage", Controller.deleteImage);
//express requests




module.exports = router;
