const query = require("../dbconn.js");

// 查询一条信息
exports.getNotes = function (pageconfig,callback) {
  // 默认值
  let { pageSize, currentPage } = pageconfig;
  console.log(pageconfig);
  pageSize = pageSize ? pageSize : 10;
  currentPage = currentPage ? currentPage : 1;
  let sqlStr = 'SELECT * FROM `travelnotes` where visible>1000 ORDER BY visible DESC'
  query(sqlStr, function (err, data) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    // console.log(data);
    let total = data.length;
    console.log("个数：",total);
    // 分页条件 (跳过多少条)
    let num = (currentPage - 1) * pageSize;
    // 拼接分页的sql语句
    sqlStr += ` limit ${num},${pageSize}`;
    // 执行sql语句 （查询对应页码的数据）
    query(sqlStr,(err,data) => {
      if(err) throw err;
      // 把数据返回给前端 两个数据 数据总条数 total 和 对应页码的数据 data
      let sqldata = { total, data }
      callback(sqldata);
    })
  });
}
// 添加一条评论
exports.addComm = function (comment, callback) {
  var arr = [];
  arr.push(comment.value);
  arr.push(comment.content);
  arr.push(comment.imgurl);
  arr.push(comment.createtime);
  arr.push(comment.u_id);
  arr.push(comment.username);
  arr.push(comment.sc_id);
  console.log(comment);
  query('INSERT INTO `comment` (evaluate,content,img,time,u_id,name,sc_id) VALUES (?,?,?,?,?,?,?)', arr, function (err, results, fields) {
    if (err) {
      console.log('数据添加失败');
      throw err;
    }
    callback(results);
  });
}
