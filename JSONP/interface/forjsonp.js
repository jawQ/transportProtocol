exports.forjsonp = (req, res) => {
  console.log('查看请求值...')
  console.log(req.query)
  var returnval = {
    a: '我是forjsonp的a返回值',
    b: '我是forjsonp的b返回值'
  }
  // res.jsonp
  res.jsonp(returnval)
  // 用res.send的方式来模拟 res.jsonp
  // var body = "forjsonp(" + JSON.stringify(returnval) + ")"
  // res.send(body)
}