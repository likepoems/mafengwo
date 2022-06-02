const query = require('../dbconn')
// 通过电话号码查询用户
exports.getusers = function (phonenumber, callback) {
  // let key = 'phonenumber'
  var arr = [];
  console.log(phonenumber);
  // console.log("studentinfo", number);
  arr.push(phonenumber);
  query('SELECT * FROM `user` where phonenumber' + '=?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}
// 通过id查询用户
exports.getusersbyid = function (id, callback) {
  // let key = 'phonenumber'
  var arr = [];
  // console.log(phonenumber);
  // console.log("studentinfo", number);
  arr.push(id);
  query('SELECT * FROM `user` where id' + '=?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}
// 注册
exports.addusers = function (usersinfo, callback) {
  // let key = 'phonenumber'
  // var arr = [];
  console.log(usersinfo);
  arr = Object.values(usersinfo)
  console.log(arr);
  query('INSERT INTO `user` ( phonenumber,name,password) VALUES (?,?,?)', arr, function (err, results, fields) {
    if (err) {
      console.log('数据添加失败');
      throw err;
    }
    callback(results);
  });
}
// 上传照片
exports.updateProfile = function (userid, url, callback) {
  var arr = [];
  arr.push(url);
  arr.push(userid);
  query('update `user` set PROFILE ' + '= ?' + ' WHERE id' + '=?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据更新失败');
      throw err;
    }
    callback(results);
  });
}
// 获取游记
exports.getTravels = function (userid, callback) {
  var arr = [];
  arr.push(userid);
  query('SELECT * FROM travelnotes WHERE u_id' + '=?' + ' order by writetime desc', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}
// 删除游记
exports.dtravelnote = function (tid, callback) {
  var arr = [];
  arr.push(tid);
  query('delete FROM travelnotes WHERE t_id =?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}
// 获取本用户的点评
exports.getComments = function (userid, callback) {
  var arr = [];
  arr.push(userid);
  query('SELECT * FROM comment WHERE u_id' + '=?' + ' order by time desc', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

exports.getCommentsTitle = function (userid, callback) {
  var arr = [];
  arr.push(userid);
  query('SELECT * FROM comment WHERE ' + '=?' + ' order by time desc', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}
