const query = require("../dbconn.js");



//张正宇
// 根据id查酒店信息
exports.getHotelInfoById = function (id,callback) {
  query(`SELECT * FROM hotel_list where hotel_id = ${id}`, function (err, results, fields) {
    if (err) {
      console.log('数据查询失败');
      throw err;
    }
    callback(results);
  });
}

// 查询所有的酒店信息
exports.getAllHotelInfo = function (pageNum,pageSize,hotelType,callback) {
  let sql =""
  if(hotelType===""){
    sql = 'SELECT * FROM `hotel_list`'
  }else{
    sql = "SELECT * FROM hotel_list where hotel_type = '" + `${hotelType}` + "'"
  }
  query(sql, function (err, result) {
    if (err) throw err;
    let total = result.length
    let n = (pageNum - 1)*pageSize
    sql +=  ` limit ${n}, ${pageSize}`
    console.log(sql)
    query(sql, function (err1, result1) {
      if (err1) throw err;
      let sqldata = { total , result1}
      callback(sqldata)
    })
  });
}
//查询酒店下评论列表
exports.getHotelCommentList = function(pageNum,pageSize,ht_id,callback){

  let sql = "SELECT * FROM comment where ht_id = '" + `${ht_id}` + "'"
  query(sql, function (err, result) {
    if (err) throw err;
    let total = result.length
    let n = (pageNum - 1)*pageSize
    sql +=  ` limit ${n}, ${pageSize}`
    query(sql, function (err1, result1) {
      if (err1) throw err;
      let sqldata = { total , result1}
      callback(sqldata)
    })
  });
}