// pages/QRcode/QRcode.js
Page({
    data: {
        name:"姓名",
        identification_num:"00000000000000000"
    },

      // 事件处理函数
    getUserDetail(){
        //跳转身份详情页面
        wx.navigateTo({
            url: '../detail/detail'
        })
    },
    getHome(){
        //跳转身份详情页面
        wx.navigateTo({
            url: '../home/home'
        })
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})