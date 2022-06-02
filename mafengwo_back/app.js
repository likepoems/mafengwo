const express = require('express');
const multer = require('multer')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fs = require('fs')
const hotelquery  = require('./query/hotel_query')
const path = require("path");
const scenicquery = require('./query/scenic_query');
const commentquery = require('./query/comment_query');
var usersRouter = require('./query/users')
const travelnotes_query = require('./query/travelnotes_query')
const profileupload = require('./upload')
const { set } = require('express/lib/application');
const app = express();
const SECRET = 'asdnscnfeornk094380de'
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers","Authorization");
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'static')));

const auth = (req,res,next)=>{
    const raw = String(req.headers.authorization).split(' ').pop()
    try {
        const {id} = jwt.verify(raw,SECRET)
        usersRouter.getusersbyid(id,function (rec) {
            req.user = rec[0]
            next()
        });
        
    } catch (error) {
        res.send("unLogin")
    }
}

app.get('/usersbyid', auth,(req, res) => {
    // let key =  req.query.phoneNumber;
    let id = req.user.id;
    usersRouter.getusersbyid(id,function (rec) {
        // res.json(rec).end();
        res.send(rec[0].profile);
    });
});
app.get('/users', (req, res) => {
    // let key =  req.query.phoneNumber;
    let phonenumber = req.query.phoneNumber;
    usersRouter.getusers(phonenumber,function (rec) {
        res.json(rec).end();
    });
});
// 注册
app.post('/users',(req,res)=>{

    req.body.params.pwd = bcrypt.hashSync(req.body.params.pwd,10) 
    let usersInfo = req.body.params
    usersRouter.addusers(usersInfo,function(rec){
        res.json(rec).end()
    })
})
// 登录

app.get('/userinfo', (req, res) => {
    let phonenumber = req.query.phoneNumber;
    let pwd = req.query.pwd
    let info = {}
    usersRouter.getusers(phonenumber,function (rec) {
        if(rec.length==0){
            info = {
                status:0
            }
        }else if(!bcrypt.compareSync(pwd,rec[0].password)){
            info = {
                status:1
            }
        }else{
            const token = jwt.sign({
                id:String(rec[0].id)
            },SECRET)
            info = {
                status:2,
                id:rec[0].id,
                name:rec[0].name,
                profile:rec[0].profile,
                token
            }
        }
        res.json(info).end();
    });
});
// 获取单个用户的游记
app.get('/travelnote', auth,(req, res) => {
 
    let id = req.user.id
    usersRouter.getTravels(id,function (rec) {
        res.json(rec).end();
    });
    
  });
// 删除单个游记
app.delete('/travelnote',(req,res)=>{
    let tid = req.query.tid
    usersRouter.dtravelnote(tid,function (rec) {
        res.json(rec).end();
    });
})
// 更改头像
app.post('/profile',profileupload.single('8'),(req,res)=>{
    let id = Number(req.file.fieldname)
    let headimgurl = ('headimg/'+req.file.filename)
    // console.log(profileupload.filename);
    usersRouter.updateProfile(id,headimgurl,(rec)=>{
        res.send(headimgurl)
    })
})
// 获取本用户点评
app.get('/comments', (req, res) => {
 
    let id = req.query.userid
    console.log(id);
    usersRouter.getComments(id,function (rec) {
        res.json(rec).end();
        // let res1 = res.json(rec)
        // console.log(res1);
        // scenicquery.getscenic(s_id,function (rec) {
        //     let res2 = res.send(rec);
        //     console.log(res2);
        // });
    });
    
  });

/**
 * 钟超
 */
//根据s_id获取单个景点信息
app.get('/scenic', (req, res) => {
    let s_id =  req.query.s_id;
    scenicquery.getscenic(s_id,function (rec) {
        res.send(rec);
    });
});
//获取景点Top5
app.get('/scenictop', (req, res) => {
    scenicquery.getscenictop(function (rec) {
        res.send(rec);
    });
});

//景点分页展示
app.post('/scenicpage', (req, res) => {
    let start = req.body.start;
    let pageitemsize =req.body.pageitemsize;
    scenicquery.getscenicpage(start,pageitemsize,function (rec) {
        res.send(rec);
    });
});
//根据所有景点个数
app.get('/scenicnum', (req, res) => {
    scenicquery.getscenicnum(function (rec) {
        res.send(rec);
    });
}); 
//根据景点id对获取对应的景点评论
app.post('/sceniccommentpage', (req, res) => {
    let s_id =  req.body.s_id;
    let start = req.body.start;
    let pageitemsize =req.body.pageitemsize;
    scenicquery.getsceniccommentpage(s_id,start,pageitemsize,function (rec) {
        res.send(rec);
    });
});

//获取本景点所有评论的个数所有个数
app.get('/commentnum/:s_id', (req, res) => {
    let s_id = req.params.s_id;
    scenicquery.getcommentnum(s_id,function (rec) {
        res.send(rec);
    });
});

//根据id查询多个用户信息
app.get('/manyusers', (req, res) => {
    let idarr = req.query.idarr;
    // console.log(idarr);
    scenicquery.getmanyusers(idarr,function (rec) {
        res.send(rec);
    });
});

/**
 * 张正宇
 * 
 */
//查询所有酒店列表
app.post("/hotelList",(req,res)=>{
    let { pageNum,pageSize,hotelType } = req.body
    hotelquery.getAllHotelInfo(pageNum,pageSize,hotelType,function(rec){
        res.json(rec).end();
    })
})
//查询酒店详情
app.get('/hotelListBy',(req,res)=>{
    let id = req.query.id
    hotelquery.getHotelInfoById(id,function(rec){
        res.json(rec).end();
    })
})
// 查询酒店评论列表
app.post("/comments",(req,res)=>{
    let { pageNum,pageSize,ht_id } = req.body
    hotelquery.getHotelCommentList(pageNum,pageSize,ht_id,function(rec){
        res.json(rec).end();
    })
})
//景点分页展示
app.post('/scenicpage', (req, res) => {
    let start = req.body.start;
    let pageitemsize =req.body.pageitemsize;
    scenicquery.getscenicpage(start,pageitemsize,function (rec) {
        res.send(rec);
    });
});

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
const upload = multer({ dest: __dirname + '/static/travelnotes/upload' })
app.post('/newtravel', upload.single('file'), async (req, res) => {
    let file = req.file;
    let basePath = __dirname + '/static/travelnotes/upload/';
    let oldFileName = file.filename
    let newFileName = Date.now() + '.png'
    let filePath = basePath + oldFileName;
    let newFilePath = basePath + newFileName;
    if (fs.existsSync(basePath)) {
        fs.rename(filePath, newFilePath, (err) => {
            if (err) throw err
        })
    }
    let imgurl = 'travelnotes/upload/' + newFileName
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
        u_id: Number(req.body.userid),
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
    // console.log(formdata);
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

/**
 * 何滔
 */
const uploads = multer({ dest: __dirname + '/static/commentphoto' })
app.post('/comment', uploads.single('file'), async (req, res) => {
//    console.log(req.body.u_id);
   let file = req.file;
//    console.log(file);
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
   let imgurl = 'commentphoto/' + newFileName
   function settime(time = +new Date()) {
       var date = new Date(time + 8 * 3600 * 1000);
       return date.toJSON().substr(0, 19).replace("T", " ");
   }
   let formdata = {
       u_id:req.body.u_id,
       username:req.body.username,
       imgurl: imgurl,
       value: req.body.value,
       content: req.body.desc,
       sc_id:req.body.sc_id,
       createtime: settime()
   }
//    console.log(formdata.imgurl,formdata.value,formdata.content);
   commentquery.addComm(formdata,function (rec) {
       res.json(rec).end();
   })
})

app.get("/provincepage",(req,res) => {
    // 接收前端的参数
    let pageall = req.query;
    // console.log(pageall);
    commentquery.getNotes(pageall, function (rec) {
        res.json(rec).end();
    });
})


const port = process.env.PORT || 5000;
app.listen(port, function () { console.log(`监听端口： ${port}`) });

