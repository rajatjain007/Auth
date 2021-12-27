const multer = require('multer');
const router = require('express').Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage}).single('image');

router.post('/',upload,async(req,res)=>{
       res.json({
           fileName : req.file.filename
       })
})





module.exports = router;