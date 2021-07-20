路由
  约定式
    展示区： <nuxt/>
    声明式跳转：<nuxt-link :to="{ name: 'goods-id', params: { id: 3 }, query: { a: 1, b: 2 } }">详情页3</nuxt-link>
      name: 路由名 目录名-其他目录-文件名
      params: key要对等文件名
    子路由：
      目录代表子路由，子路由内部同级的文件，代表同一级路由

    展示区层级控制：
      | PATH            | FILE                  |
      | ----------------| ----------------------|
      |'/'              | 'index.vue'           |
      |'goods'          | 'goods/index.vue'     |
      |'goods/123'      | 'goods/_id.vue'       |
      |'goods/comments' | 'goods/comments.vue'  |

      pages/一级展示区/二级展示区
                    /index.vue 会在一级展示区展示
                    /index.vue 空文档，代表有默认页面，不会显示其他 _uid.vue页面内容
  配置： nuxt.config.js中的router配置项

  路由守卫：
    前置:
      依赖中间件middleware,插件
      全局守卫：nuxt.config.js指向middleware
              在layout.vue中定义中间件
              插件前置
      组件独享守卫：
              页面用middleware:'auth',或者middleware(){}
    后置：
      全局守卫：插件后置
      页面独享：页面中依赖vue的beforeRouterLeave钩子
      
  数据交互:
    安装:
      @nuxtjs/axios  @nuxtjs/proxy
    nuxt.config.js配置
      modules: [@nuxtjs/axios]
  跨域配置:
    axios: {
      proxy: true,
      preFix: '/api'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  请求拦截：插件配置
    plugins: [
      {
        src: '~/plugins/axios',
        ssr: true
      }
    ]
  自定义loading页面：
    loading: {
      color: 'red',
      height: '3px'
    }
    loading: '~/components/loading.vue'
  状态持久化：
    安装：cookie-universal-nuxt(this.$cookies)
    思路：登录时，同步数据到vuex & cookie, 强制刷新后，在nuxtServerInit钩子中，取出cookies,同步到vuex,axios拦截器中读取vuex中的token,添加到请求header中。
