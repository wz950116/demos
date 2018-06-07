import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (getToken()) {
        // 有token的情况下不准直接返回登陆界面，必须登出
        if (to.path === '/login') {
            next({
                path: '/'
            })
            NProgress.done()
        } else {
            if (store.getters.roles.length === 0) {
                // 发送请求，获取用户信息
                store.dispatch('GetInfo').then(res => {
                    const menuButtons = res.data.menuButtons
                    store.dispatch('GenerateRoutes', { menuButtons }).then(() => {
                        router.addRoutes(store.getters.addRouters)
                        next({ ...to, replace: true })
                    })
                }).catch(() => {
                    store.dispatch('FedLogOut').then(() => {
                        Message.error('验证失败,请重新登录')
                        next({
                            path: '/login'
                        })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 白名单路由
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})