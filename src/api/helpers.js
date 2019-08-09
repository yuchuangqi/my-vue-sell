import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
      // 解构赋值
      const { errno, data } = res.data
      // 定义一个常量,如果是其它错误码，作扩展
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
    })
  }
}
