import { formatProList } from '../handles/handleProList';
//数量格式化
export function formatNum(num) {
  return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num;
}

//日期格式化
export function formatTime(value, type = 0) {
  var time = new Date(value);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  var arr = [
    year + "-" + month + "-" + date,
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
    year + "年" + month + "月" + date,
    year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second,
    hour + ":" + minute + ":" + second,
    month + "-" + date,
    year + "/" + month + "/" + date + " " + hour + ":" + minute
  ]
  return arr[type];
}

// 将https://tea.qingnian8.com/product/getlist接口返回的商品数组格式化
export function formatObj2Arr(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let curList = formatProList;
  curList.map(item => {
    let index = keys.findIndex(keyItem => keyItem == item.key);
    item.value =  values[index];
    return item;
  })
  return curList;
}