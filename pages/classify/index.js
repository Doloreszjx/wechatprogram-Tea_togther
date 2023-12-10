// pages/classify/index.js
import { queryProList, queryNav2ProList } from '../../utils/apis';
import { formatObj2Arr } from '../../utils/common';

// 初始选中导航栏第一项
let activeNavIndex;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    proList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let {idx} = options;    
    await this.getNavList(); 
    if(idx){
      this.handleTabClick(idx);
    }else{
      activeNavIndex = this.data.navList[0].navId;
      this.getNav2ProList();
    }
  },

  // 导航栏接口
async getNavList() {
  await queryProList()
    .then(res => {
      if (!!(res.errCode === 0 && res.data && res.data.length)) {
        const navList =  res.data.map(item => ({
          desc: item.classname,
          icon: item.icon,
          navId: item._id
        }))
        this.setData({
          navList
        })
      }
    })
    .catch(err => {
      wx.showToast({
        title: '接口异常',
        duration: 2000,
        icon: 'error'
      })
      console.error('商城页面导航栏接口报错：', err);
    })   
},

// 导航栏对应商品列表接口
// size 从第几项开始，默认第0项，实现翻页效果
getNav2ProList(activeSize=0) {
  queryNav2ProList({
    navid: activeNavIndex, //分类ID
    size: activeSize, //分页从多少页开始
  }).then(res => {
    if (!!(res.errCode === 0 && res.data && res.data.length)) {
      const formatProList = res.data.map(item => ({
        descList: formatObj2Arr(item),
        key: item._id,
        picUrl: item.picpath,
        title: item.title,
      }));
      
      this.setData({
        proList: formatProList
      })
    }
  }).catch(err => {
    console.error("商品页查询商品列表接口异常：", err);;
    wx.showToast({
      title: '商品页查询商品列表接口异常',
      duration: 2000,
      icon: 'error'
    })
  })
  
},
// 导航栏切换
handleTabClick(res) {
  console.log({res})
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