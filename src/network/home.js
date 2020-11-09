// 封装所有对首页的请求
import {request} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
