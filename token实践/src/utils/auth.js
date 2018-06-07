import Cookies from 'js-cookie'

const TokenKey = 'User-Token'

const RefreshTokenKey = 'Refresh-Token'

const RefreshFlg = 'Refresh-Flg'

const organ = 'User-Organ'

export function getRefreshFlg() {
  return Cookies.get(RefreshFlg)
}

export function setRefreshFlg(token) {
  return Cookies.set(RefreshFlg, token)
}

export function removeRefreshFlg() {
  return Cookies.remove(RefreshFlg)
}
export function getOrgan() {
  return Cookies.get(organ)
}

export function setOrgan(token) {
  return Cookies.set(organ, token)
}

export function removeOrgan() {
  return Cookies.remove(organ)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token)
}

export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey)
}

export function getCookies(key) {
  return Cookies.get(key)
}

export function setCookies(key, value) {
  return Cookies.set(key, value)
}

export function removeCookies(key) {
  return Cookies.remove(key)
}
