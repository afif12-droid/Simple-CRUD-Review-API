const multer = require ("multer");
const path = require ("path");

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, './imagesUploaded');
    },
    filename: function(req, file, callback){
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, callback)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null, true);
    }else {
        callback(new Error('File Tidak Didukung'), false);
    }

}

const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024*10 //max 10 mb
    },
    fileFilter: fileFilter
});

module.exports = {
    upload : upload
}