// 同步：
console.log('查看XHR的API', "http://www.w3school.com.cn/xmldom/dom_http.asp")
var queryUrl = 'https://easy-mock.com/mock/5aa25f5ba6dd8421dd47dbb7/rulerForSize/PostLoginData'
function sendAjaxForAsync(is_async) {
  console.log('是异步吗？？', is_async)
  // 创建AJAX-对象:
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    console.log('查看同步下的ajax请求参数...')
    // console.log(xhr)
    if (xhr.readyState == 0) {
      console.log('为0了。')
    }
    // XHR的属性-罗列：
    console.log('readyStage为：', xhr.readyState)
    console.log('由服务器返回的 HTTP 状态代码为：', xhr.status)
    console.log('HTTP 所有响应头部为：', xhr.getAllResponseHeaders())
    
    // 获取返回值
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log('此次请求返回数据为：')
      console.log(xhr.responseText)
      //   console.log('ajax请求返回值是：')
      //   // console.log(eval('(' + xhr.responseText+')'))
      //   console.log(xhr.responseText)
      //   console.log('如果你觉得上面的字符串不好看？eval君上！')
      //   console.log(eval('('+xhr.responseText+')'))
      //   console.log('方法太粗暴？不够优雅？json君，上吧...')
      //   console.log(JSON.parse(xhr.responseText))
    }
  }
  xhr.open('GET', queryUrl, is_async)
  // xhr.setRequestHeader("你快看我自定义头部", 'JawQ') // 必须是字母，否则会报错：Value is not a valid ByteString.
  xhr.setRequestHeader("CustomHeader", 'JawQ') // 还得保证在open之后，再配置，否则报错：The object's state must be OPENED.
  // 在发送前，还能自定义请求头：
  xhr.send(null)
  console.log('看看在onreadystatechange函数外，send函数执行后，获得的参数会是什么呢？？？记住，当我存在异步的发送ajax请求内时，我的返回值将拿不到，所以才需要去配置onreadystatechange来监听readyState的变化...')
  console.log(xhr.status)
  console.log(xhr.readyState)
  console.log(xhr.responseText)
  // for (let i = 0; i < 100; i++) {}
  // console.log('查看有没被阻塞') // 主要是想为了
}
// 异步
// sendAjaxForAsync(true)
// 同步
sendAjaxForAsync(false)