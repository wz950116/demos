import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import { getOrgan } from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token || getToken()) {
    config.headers.Authorization = 'bearer ' + (getToken() ? getToken() : store.getters.token) // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  if (store.getters.organ || getOrgan()) {
    config.headers.Organ = getOrgan() ? getOrgan() : store.getters.organ // 让每个请求携带组织结构
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
    // 判断是否重新发送请求refresh token
    const refreshToken = response.headers.refresh
    if (refreshToken === 'true' && !store.getters.refreshFlg) {
      store.commit('SET_REFRESH_FLG', true)
      store.dispatch('RefreshToken').then(() => {
        store.commit('SET_REFRESH_FLG', false)
      }).catch(() => {
        store.commit('SET_REFRESH_FLG', false)
      })
    }
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    const res = response.data

    if (res.status) {
      return response.data
    } else {
      // 刷新指令失败
      if (res.msgId === 'EAUT0010') {
        return Promise.reject('error')
      } else if (res.msgId === 'EAUT0003' || res.msgId === 'EAUT0004' || res.msgId === 'EAUT0007') {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
      } else {
        Message({
          message: res.msgText,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject('error')
    }
  },
  err => {
    // 这里是返回状态码不为200时候的错误处理
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          err.message = '未授权，请登录'
          store.dispatch('FedLogOut').then(() => {})
          break

        case 403:
          err.message = '拒绝访问'
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    }
    console.log('err' + err)
    Message({
      message: err.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

export default service
