export const actions = {
  nuxtServerInit (store, { app: { $cookies } }) {
    // 初始化东西到store中
    // console.log('nuxtServerInit钩子：store中执行初始化数据')

    // 初始化token到store中
    const user = $cookies.get('user')
    store.commit('user/M_UPDATE_USER', user)
  }
}