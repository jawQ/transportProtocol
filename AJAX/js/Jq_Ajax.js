// get
$('.Jq_Ajax_get').on('click',function (e) {
  e.preventDefault()
  var queryParams;
  queryParams = 'I am from Jq_Ajax_get'
  // alert('点击中了Jq_Ajax')
  console.log('点中了jq的get请求')
  $.ajax({
    url: 'http://192.168.0.3:666/Ajax_get?params='+ queryParams,
    type: 'GET',
    success: function (xhr) {
      console.log('查看success函数返回值')
      console.log(xhr)
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('查看error函数返回值')
      console.log(xhr)
      console.log(textStatus)
      console.log(errorThrown)
    },
    complete: function (xhr,textstatus) {
      console.log('查看complete函数返回的xhr对象和http状态解释')
      console.log(xhr)
      console.log(textstatus)
    }
  })
})

// post
$('.Jq_Ajax_post').on('click', function (e) {
  e.preventDefault()
  var queryParams;
  queryParams = {
    name: 'JawQ',
    age: 23
  }
  console.log('点中了jq的post请求')
  $.ajax({
    url: 'http://192.168.0.3:666/Ajax_post',
    type: 'POST',
    // dataType: 'json',
    data: queryParams,
    success: function (xhr) {
      console.log('查看success函数返回值')
      console.log(xhr)
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('查看error函数返回值')
      console.log(xhr)
      console.log(textStatus)
      console.log(errorThrown)
    }
  })
})