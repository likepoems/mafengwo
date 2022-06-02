const express = require('express');
const path = require("path");
const scenicquery = require('./query/scenic_query');
const commquery = require('./query/comment_query');
const app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //方便返回json
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'static')));

/**
 * 钟超
 */

//根据所有景点个数
app.get('/scenicnum', (req, res) => {
    scenicquery.getscenicnum(function (rec) {
        res.send(rec);
    });
});

//根据s_id获取单个景点信息
app.get('/scenic', (req, res) => {
    let s_id = req.query.s_id;
    scenicquery.getscenic(s_id, function (rec) {
        res.send(rec);
    });
});

//景点top5展示
app.get('/scenictop', (req, res) => {
    scenicquery.getscenictop(function (rec) {
        res.send(rec);
    });
    // throw new Error('程序后台发生错误请重试！');
});

//景点分页展示
app.post('/scenicpage', (req, res) => {
    let start = req.body.start;
    let pageitemsize = req.body.pageitemsize;
    scenicquery.getscenicpage(start, pageitemsize, function (rec) {
        res.send(rec);
    });
});

//根据景点id对获取对应的景点评论
app.post('/sceniccommentpage', (req, res) => {
    let s_id = req.body.s_id;
    let start = req.body.start;
    let pageitemsize = req.body.pageitemsize;
    scenicquery.getsceniccommentpage(s_id, start, pageitemsize, function (rec) {
        res.send(rec);
    });
});

//获取本景点所有评论的个数所有个数
app.get('/commentnum/:s_id', (req, res) => {
    let s_id = req.params.s_id;
    scenicquery.getcommentnum(s_id, function (rec) {
        res.send(rec);
    });
});

//根据id查询多个用户信息
app.get('/manyusers', (req, res) => {
    let idarr = req.query.idarr;
    // console.log(req.query.idarr);
    scenicquery.getmanyusers(idarr, function (rec) {
        res.send(rec);
    });
});


/**
 * 何滔
 */
var multer = require('multer')
var fs = require('fs')
const upload = multer({
    dest: __dirname + '/static/commentphoto'
})
app.post('/comment', upload.single('file'), async (req, res) => {
    // console.log(req);
    let file = req.file;
    console.log(file);
    let basePath = __dirname + '/static/commentphoto/';
    let oldFileName = file.filename
    let newFileName = Date.now() + '.png'
    let filePath = basePath + oldFileName;
    let newFilePath = basePath + newFileName;
    if (fs.existsSync(basePath)) {
        fs.rename(filePath, newFilePath, (err) => {
            if (err) throw err
        })
    }
    let imgurl = 'static/commentphoto/' + newFileName

    function settime(time = +new Date()) {
        var date = new Date(time + 8 * 3600 * 1000);
        return date.toJSON().substr(0, 19).replace("T", " ");
    }
    let formdata = {
        imgurl: imgurl,
        value: req.body.value,
        content: req.body.desc,
        createtime: settime()
    }
    console.log(formdata.imgurl, formdata.value, formdata.content);
    commquery.addComm(formdata, function (rec) {
        res.json(rec).end();
    })
})

// app.get('/indexxx',(req,res)=>{
//     throw new Error('程序发生了未知错误')
// })

//错误处理中间件
// app.use((err, req, res, next) => {
//     res.status(500).send(err.message);
// })
const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log(`监听端口： ${port}`)
});