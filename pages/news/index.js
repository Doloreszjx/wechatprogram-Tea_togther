// pages/news/index.js
import { queryNewsList } from '../../utils/apis';
import { formatTime, formatNum } from '../../utils/common';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: [],
    isTotal: false,
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewsData();
  },

  // 获取新闻资讯列表
  getNewsData(size=0) {
    this.setData({
      isLoading: true
    })
    queryNewsList({
      limit: 8,
      size
    }).then(res => {
      this.setData({
        isLoading: false
      })
      if (!!(res.data && res.data.length)) {
        res.data.forEach(item=>{
          item.view_count=formatNum(item.view_count)
          item.publish_date=formatTime(item.publish_date,5)
        })
        // 数据请求时关闭下拉刷新，因为下拉刷新的时候也会有请求，请求会冲突
        wx.stopPullDownRefresh();
        const oldNewsArr = this.data.newsArr;
        const newNewsArr = [...oldNewsArr, ...res.data];
        if (newNewsArr.length == res.total) {
          this.setData({
            isTotal: true
          })
        }
        this.setData({
          newsArr: newNewsArr
        })
      }
    }).catch(err => {
        console.error('首页列表获取失败', err);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      newsArr: [],
      isLoading: false,
      isTotal: false
    })
    this.getNewsData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.isTotal) return;
    this.getNewsData(this.data.newsArr.length);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})