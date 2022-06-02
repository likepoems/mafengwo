const express = require('express');
const path = require("path");
const travelnotes_query = require('./query/travelnotes_query');
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

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

/**
 * 陈冬生
 */

//查询全部游记的信息
app.get('/travelnoteslist', (req, res) => {
    let pageconfig = req.query
    // console.log('分页配置', pageconfig);
    travelnotes_query.getNotesList(pageconfig, function (rec) {
        res.json(rec).end();
    });
});


//根据t_id查询游记详情信息
app.get('/travelnotesdetail', (req, res) => {
    let t_id = req.query.t_id;
    travelnotes_query.getTravelNotesDetail(t_id, function (rec) {
        res.json(rec).end();
    });
});


// 定义写游记接口
var multer = require('multer')
var fs = require('fs')
const upload = multer({ dest: __dirname + '/static/upload' })
app.post('/newtravel', upload.single('file'), async (req, res) => {
    let file = req.file;
    let basePath = __dirname + '/static/upload/';
    let oldFileName = file.filename
    let newFileName = Date.now() + '.png'
    let filePath = basePath + oldFileName;
    let newFilePath = basePath + newFileName;
    if (fs.existsSync(basePath)) {
        fs.rename(filePath, newFilePath, (err) => {
            if (err) throw err
        })
    }
    let imgurl = 'upload/' + newFileName
    // 时间格式化函数
    function dateFormat(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }
    let date = new Date();
    let formdata = {
        headimage: "travelnotes/user00.jpg",
        sight_img: imgurl,
        head_img: "travelnotes/user00.jpg",
        notes_title: req.body.formtitle,
        notes_content: req.body.formconent,
        likenum: 0,
        timestr: dateFormat("YYYYmmdd", date),
        datetimes: dateFormat("dd/mm/YYYY", date) + ' ' + dateFormat("HH:MM:SS", date),
        place: "成都",
        tourist: req.body.username,
        visible: 2,
        visibleagin: 2,
        writetime: dateFormat("YYYY-mm-dd HH:MM", date),
        start: dateFormat("YYYY-mm-dd", date),
        days: 2,
        method: "和朋友",
        price: 1000,
        readme01: req.body.formconent,
        readme02: req.body.formconent,
        readme03: req.body.formconent,
        readimg01: "travelnotes/travelnotesdetail00.png",
        readimg02: imgurl,
        readimg03: "travelnotes/travelnotesdetail01.png"
    }
    // console.log('formdata', formdata);
    travelnotes_query.addNewTravelNote(formdata, function (rec) {
        res.json(rec).end();
    });
})

// 文章点赞
app.post('/todianzan', (req, res) => {
    let data = {
        t_id: req.body.t_id,
        timestr: req.body.timestr,
        likenum: req.body.likenum
    }
    travelnotes_query.DianZan(data, function (rec) {
        res.json(rec).end();
    })
})
const port = process.env.PORT || 5000;
app.listen(port, function () { console.log(`监听端口： ${port}`) });
