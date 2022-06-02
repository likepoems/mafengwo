//陈冬生
const query = require("../dbconn.js");

// 查询游记列表信息
exports.getNotesList = function (pageconfig, callback) {
  let { pageSize, currentPage, curnav } = pageconfig;
  // 默认值
  pageSize = pageSize ? pageSize : 3;
  currentPage = currentPage ? currentPage : 1;
  curnav = curnav ? curnav : 0;

  let sqlStr = 'SELECT * FROM `travelnotes` where visible>1000 ORDER BY visible DESC'
  if (curnav == 1) {
    sqlStr = 'SELECT * FROM `travelnotes`  ORDER BY writetime DESC'
  }
  // 查询全部数据
  query(sqlStr, function (err, results) {
    if (err) throw err;
    let total = results.length;
    // 分页条件 (跳过多少条)
    let n = (currentPage - 1) * pageSize;
    sqlStr += ` limit ${n}, ${pageSize}`;
    // 查询特定的数据
    query(sqlStr, function (error, data) {
      if (error) throw error;
      let sqldata = { total, data }
      callback(sqldata);
    })
  })
}

// 根据t_id查询游记详情
exports.getTravelNotesDetail = function (t_id, callback) {
  var arr = [];
  arr.push(t_id);
  query('SELECT * FROM `travelnotes` WHERE t_id=?', arr, function (err, results, fields) {
    if (err) throw err;
    callback(results);
  });
}

// 添加一条游记
exports.addNewTravelNote = function (data, callback) {
  var arr = [];
  arr.push(data.u_id)
  arr.push(data.headimage);
  arr.push(data.sight_img);
  arr.push(data.head_img);
  arr.push(data.notes_title);
  arr.push(data.notes_content);
  arr.push(data.likenum);
  arr.push(data.timestr);
  arr.push(data.datetimes);
  arr.push(data.place);
  arr.push(data.tourist);
  arr.push(data.visible);
  arr.push(data.visibleagin);
  arr.push(data.writetime);
  arr.push(data.start);
  arr.push(data.days);
  arr.push(data.method);
  arr.push(data.price);
  arr.push(data.readme01);
  arr.push(data.readme02);
  arr.push(data.readme03);
  arr.push(data.readimg01);
  arr.push(data.readimg02);
  arr.push(data.readimg03);
  // console.log(data);
  query('INSERT INTO `travelnotes` (u_id,headimage,sight_img,head_img,notes_title,notes_content,likenum,timestr,datetimes,place,tourist,visible,visibleagin,writetime,start,days,method,price,readme01,readme02,readme03,readimg01,readimg02,readimg03) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', arr, function (err, results, fields) {
    if (err) throw err;
    callback(results);
  });
}

// 文章点赞
exports.DianZan = function (data, callback) {
  var arr = []
  arr.push(Number(data.likenum))
  arr.push(Number(data.timestr))
  arr.push(Number(data.t_id))
  // console.log(arr);
  query(`UPDATE travelnotes SET likenum=?,timestr=? WHERE t_id=?`, arr, function (err, results, fields) {
    if (err) throw err;
    callback(results);
  });
}
