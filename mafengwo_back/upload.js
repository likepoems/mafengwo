const path=require('path');
const multer = require('multer')
let filename = ''
var storage = multer.diskStorage({
  destination(req,file,cb){
    cb(null,path.join(__dirname,'/static/headimg'))
  },
  filename(req,file,cb){
    let ext = path.extname(file.originalname)
    filename = file.fieldname+'-'+Date.now()+ext
    cb(null,filename)
  }
})
var upload = multer({storage})
module.exports = upload