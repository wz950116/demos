import { login, logout, getInfo, refreshToken } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getRefreshToken, setRefreshToken, removeRefreshToken, setOrgan } from '../../utils/auth'

const user = {
  state: {
    token: getToken(),
    refreshToken: getRefreshToken(),
    name: '',
    account: '',
    refreshFlg: false,
    userGroupId: '',
    userOrganId: '',
    loginOrganId: '',
    avatar: '',
    roles: [],
    menuButtons: []
  },

  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data.accessToken
      state.refreshToken = data.refreshToken
    },
    REMOVE_TOKEN: (state) => {
      state.token = ''
      state.refreshToken = ''
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER_GROUP_ID: (state, userGroupId) => {
      state.userGroupId = userGroupId
    },
    SET_USER_ORGAN_ID: (state, userOrganId) => {
      state.userOrganId = userOrganId
    },
    SET_LOGIN_ORGAN_ID: (state, loginOrganId) => {
      state.loginOrganId = loginOrganId
    },
    SET_MENUBUTTONS: (state, menuButtons) => {
      state.menuButtons = menuButtons
    },
    SET_REFRESH_FLG: (state, refreshFlg) => {
      state.refreshFlg = refreshFlg
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.accessToken)
          setRefreshToken(data.refreshToken)
          commit('SET_TOKEN', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 刷新指令
    RefreshToken({ commit }) {
      const token = getRefreshToken()
      return new Promise((resolve, reject) => {
        refreshToken(token).then(response => {
          const data = response.data
          setToken(data)
          commit('SET_TOKEN', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_ACCOUNT', data.account)
          commit('SET_USER_GROUP_ID', data.userGroupId)
          commit('SET_USER_ORGAN_ID', data.userOrganId)
          commit('SET_LOGIN_ORGAN_ID', data.loginOrganId)
          commit('SET_MENUBUTTONS', data.menuButtons)
          setOrgan(data.loginOrganId)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('REMOVE_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          removeRefreshToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('REMOVE_TOKEN', '')
        removeToken()
        removeRefreshToken()
        resolve()
      })
    },

    // 设置登录后选择的机构ID
    SetOrgan({ commit }, organId) {
      return new Promise((resolve, reject) => {
        commit('SET_LOGIN_ORGAN_ID', organId)
        resolve()
      })
    }
  }
}

export default user
