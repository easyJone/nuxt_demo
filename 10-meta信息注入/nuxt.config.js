module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '我是标题',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '11112222' }, // hid: 保持一致
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/transition.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mixins.js',
    '~/plugins/router.js',
    {
      src: '~/plugins/axios.js',
      ssr: true // 开启服务端渲染
    },
    {
      src: '~/plugins/element-ui',
      ssr: true
      // mode: 'server' // client v2.4+
    }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 提取element-ui TODO:不起作用？
    transpile: [/^element-ui/],
    // 开启打包分析
    analyze: true,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    }

  },
  telemetry: false, // 不提示参与计划
  devtools: process.env.NODE_ENV !== 'production', // 启用vue devtools
  dev: process.env.NODE_ENV !== 'production', // 开发模式
  router: { // 覆盖默认的vue-router配置
    middleware: 'auth', // 为应用的每个页面配置默认中间件
    // 扩展router
    extendRoutes (routes, resolve) {
      // console.log(routes)
      routes.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  axios: {
    proxy: true, // 开启跨域
    preFix: '/api', // baseUrl
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 代理地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 页面加载loading定义
  // loading: { color: 'red', height: '10px' },
  loading: '~/components/loading.vue', // 自定义loading组件

}
