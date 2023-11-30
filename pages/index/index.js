import { queryNavList, queryNewsList } from '../../utils/apis';
import { formatTime, formatNum } from '../../utils/common';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr: [],
    newsArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getNewsList();
  },

// 获取首页导航栏数据
getNavList() {
  queryNavList()
      .then(res => {
        if (!!(res.data && res.data.length)) {
          const navList = res.data.map(item => ({
            iconUrl: item.icon,
            desc: item.classname,
            id: item.id
          }))
          this.setData({
            navArr: navList
          })
        }
      })
      .catch(err => {
        console.error('首页列表获取失败', err);
      })
},
// 获取首页新闻列表数据
getNewsList() {
  queryNewsList({
    limit:3,
    hot:true
  })
    .then(res=>{
      if (!!(res.data && res.data.length)) {
        res.data.forEach(item=>{
          item.view_count=formatNum(item.view_count)
          item.publish_date=formatTime(item.publish_date,5)
        })
        this.setData({
          newsArr:res.data
        })
      }
  })
  .catch(err => {
    console.error('首页新闻列表获取失败', err);
  })
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