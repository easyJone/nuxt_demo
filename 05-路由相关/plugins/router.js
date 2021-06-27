export default ({ app, redirect, params, query, store }) => {
  // app: vue实例
  // redirect: 跳转函数
  app.router.beforeEach((to, from, next) => {
    // 全局路由守卫，
    // 注意： 只能使用next(true/false),不能使用next('/login')，需要使用redirect来实现跳转
  })

  // 插件配置全局后置守卫
  app.router.afterEach((to, from, next) => {

  })



}