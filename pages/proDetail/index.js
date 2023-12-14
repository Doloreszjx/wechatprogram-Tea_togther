// pages/proDeetail/index.js
import { queryProList } from '../../utils/apis';
import { formatObj2Arr } from '../../utils/common';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: null,
    picUrl: '',
    title: '',
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    if (id) {
      this.getProList(id);
    }
  },

  // 获取商品详情数据
  getProList(id) {
    queryProList({id}).then(res => {
      if (res.errCode === 0) {
        this.setData({
          isLoading: false
        })
        const formatProItem = formatObj2Arr(res.data);
        this.setData({
          detailList: formatProItem,
          picUrl: res.data.picpath,
          title: res.data.title
        })
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      }
    }).catch(err => {
      console.error('获取商品详情数据失败:', err);
      wx.showToast({
        title: '接口异常请重试',
        duration: 2000,
        icon: 'error'
      })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})