Page({
  data: {
    theme: 'light'
  },
  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({theme}) => {
        this.setData({theme})
      })
    }

    //wx.previewImage({
    //  current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //  urls: [ // 所有图片的URL列表，数组格式
    //    'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
    //    'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //    'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    //  ],
    //  success: function(res) {
    //    console.log(res)
    //  }
    //})
  },
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'packageComponent/pages/view/view/view'
    }
  },
})
