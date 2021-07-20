export default ({ $axios, store, route, redirect }) => {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求拦截
  $axios.onRequest(config => {
    console.log('请求拦截')
    config.headers.token = 'aaaaaaaaaa'
    return config
  })

  // 响应拦截
  $axios.onResponse(res => {
    console.log('响应拦截')
    if (res.code !== 0 && route.fullPath !== '/login') {
      redirect('/login?redirectPath=' + route.fullPath)
    }
    return res
  })

  // 错误处理
  $axios.onError(error => {

    return error
  })
}