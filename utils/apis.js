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