import { request } from './request';

//获取首页导航
export function queryNavList(){
  return request({
    url:"/nav/get",
    method:"POST"
  })
}

// 获取首页新闻列表
export function queryNewsList(data) {
  return request({
    url:"/news/get",
    method:"POST",
    data
  })
}

// 获取新闻详情页数据
export function queryNewsDetailInfo(data) {
  return request({
    url: "/news/detail",
    method: "POST",
    data
  })
}

// 商场页面导航栏接口
export function queryProNavList(data) {
  return request({
    url: '/nav/get',
    method: 'POST',
    data
  })
}

// 商场页面导航栏对应商品列表接口
export function queryNav2ProList(data) {
  return request({
    url: '/product/getlist',
    method: 'POST',
    data
  })
}

// 商品详情页
export function queryProList(data) {
  return request({
    url: '/product/detail',
    method: 'POST',
    data
  })
}