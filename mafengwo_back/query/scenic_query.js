const query = require("../dbconn.js");



//钟超
// 查询所有景点个数
exports.getscenicnum = function (callback) {
  query('select count(*) from `scenic`;', function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

// 根据id查询一个景点
exports.getscenic = function (s_id, callback) {
  let arr = [];
  arr.push(s_id);
  query('SELECT * FROM `scenic` WHERE s_id=?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

//查询景点top5
exports.getscenictop = function (callback) {
  //将in语句里面的查询再包装一层，绕过去即可。
  query('SELECT * from `scenic` where `s_id` in (SELECT sc.sc_id FROM (SELECT DISTINCT `sc_id`,count(*)\
   as count FROM `comment` where `sc_id` IS NOT NULL GROUP BY `sc_id` ORDER BY count DESC LIMIT 5 ) AS sc)', 
   function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

//景点分页
exports.getscenicpage = function (start, pageitemsize, callback) {
  let arr = [];
  arr.push(parseInt(start));
  arr.push(parseInt(pageitemsize));
  // console.log(arr);
  query('select * from `scenic` order by `s_id` asc limit ?, ?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

// 根据景点id对获取对应的景点评论
exports.getsceniccommentpage = function (s_id, start, pageitemsize, callback) {
  let arr = [];
  arr.push(parseInt(s_id));
  arr.push(parseInt(start));
  arr.push(parseInt(pageitemsize));
  query('SELECT * FROM `comment` WHERE `sc_id`=? limit ?, ?', arr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

// 根绝景点id查询评论总个数
exports.getcommentnum = function (s_id, callback) {
  query('select count(*) from `comment` WHERE sc_id=?', parseInt(s_id), function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

// 根据id获取多个用户信息
exports.getmanyusers = function (idarr, callback) {
  let sql = 'select * from `user` WHERE id in(';
  for (let i = 0; i < idarr.length; i++) {
    if (i != idarr.length - 1) {
      sql += '?,';
    } else {
      sql += '?';
    }
  }
  sql += ')';
  // console.log(sql);
  query(sql, idarr, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    // console.log(results);
    callback(results);
  });
}