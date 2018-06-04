//testForm.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
        url: `${config.service.host}/weapp/testForm`,
        login: false,
        data: e.detail.value,
        success (result) {
          util.showModel('请求成功完成', JSON.stringify(result.data))
        },
        fail (error) {
            util.showModel('请求失败', error);
            console.log('request fail', error);
        }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})