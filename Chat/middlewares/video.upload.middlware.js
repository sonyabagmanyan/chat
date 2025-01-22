const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../uploads/videos");
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, {recursive: true})
}
const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, uploadDir);
    },
    filename(req, file, cb){
        const validMimeTypes = ["video/mp4", "video/webm"];

        if(validMimeTypes.includes(file.mimetype)){
            cb(null, Date.now() + path.extname(file.originalname))
        }
        else{
            cb(new Error("Invalid file type"), false)
        }
    }
})

module.exports = storage;