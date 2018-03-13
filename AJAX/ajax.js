function sendAjaxForAynchronization() {
  // 创建AJAX-对象:
  const xhr = new XMLHttpRequest()
  
  var queryUrl = 'https://easy-mock.com/mock/5aa25f5ba6dd8421dd47dbb7/rulerForSize/PostLoginData'
  xhr.open('GET',queryUrl,false)
  xhr.setRequestHeader('myHeader','JawQ')
  xhr.send()
  if ((xhr.status) >=200&&(xhr.status)< 300) {
    console.log('创建AJAX-对象...发送请求后...返回值')
    console.log(xhr.responseText)
  }
}

sendAjaxForAynchronization()
// debugger

// xhr.onreadystatechange = function () {
  
// }


