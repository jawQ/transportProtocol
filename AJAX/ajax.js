// 同步：
console.log('查看XHR的API', "http://www.w3school.com.cn/xmldom/dom_http.asp")
var queryUrl = 'https://easy-mock.com/mock/5aa25f5ba6dd8421dd47dbb7/rulerForSize/PostLoginData'

function sendAjaxForAsync(is_async) {
  console.log('是异步吗？？', is_async)
  // 创建AJAX-对象:
  const xhr = new XMLHttpRequest()
  console.log('readyState是几时是0呢?从new XHR对象时,就已经是0了.不信你看接下来的输出是不是0')
  console.log(xhr.readyState)
  xhr.onreadystatechange = () => {
    if (is_async) {
      console.log('查看异步下的ajax请求参数...')
    } else {
      console.log('查看同步下的ajax请求参数...')
    }
    // console.log(xhr)
    // XHR的属性-罗列：
    console.log('此时readyStage为：', xhr.readyState)
    console.log('由服务器返回的 HTTP 状态代码为：', xhr.status)
    // console.log('HTTP 所有响应头部为：', xhr.getAllResponseHeaders())
    // 获取返回值
    // if (xhr.readyState == 4 && xhr.status == 200) {
    // console.log('此次请求返回数据为：')
    // console.log(xhr.responseText)
    // console.log('ajax请求返回值是：')
    // // console.log(eval('(' + xhr.responseText+')'))
    // console.log(xhr.responseText)
    // console.log('如果你觉得上面的字符串不好看？eval君上！')
    // console.log(eval('(' + xhr.responseText + ')'))
    // console.log('方法太粗暴？不够优雅？json君，上吧...')
    // console.log(JSON.parse(xhr.responseText))
    // 将readyState设置为0,也就是把xhr对象初始化了,停止了ajax请求
    // xhr.abort()
    //   console.log('这是在调用了abort函数后的readyState')
    //   console.log(xhr.readyState)
    // }
  }
  xhr.open('GET', queryUrl, is_async)
  // xhr.setRequestHeader("你快看我自定义头部", 'JawQ') // 必须是字母，否则会报错：Value is not a valid ByteString.
  xhr.setRequestHeader("CustomHeader", 'JawQ') // 还得保证在open之后，再配置，否则报错：The object's state must be OPENED.
  // 在发送前，还能自定义请求头：
  xhr.send(null)
  if (!is_async) {
    console.log('当同步时获取readyState方式')
    console.log(xhr.readyState)
  }
  // console.log('******')
  // console.log('看看在onreadystatechange函数外，send函数执行后，获得的参数会是什么呢？？？')
  // console.log('记住，当我存在异步的发送ajax请求内时，ajax的返回值将会拿不到，所以有去配置onreadystatechange的必要，用来监听readyState的变化...')
  // console.log(xhr.status)
  // console.log(xhr.readyState)
  // console.log(xhr.responseText)
  // console.log('******')
  // for (let i = 0; i < 100; i++) {}
  // console.log('查看有没被阻塞') // 主要是想为了
}
// 异步
// sendAjaxForAsync(true)
// 同步
sendAjaxForAsync(false)