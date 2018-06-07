const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  account: state => state.user.account,
  userGroupId: state => state.user.userGroupId,
  userOrganId: state => state.user.userOrganId,
  loginOrganId: state => state.user.loginOrganId,
  roles: state => state.user.roles,
  menuButtons: state => state.user.menuButtons,
  organ: state => state.user.organ,
  refreshFlg: state => state.user.refreshFlg,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
