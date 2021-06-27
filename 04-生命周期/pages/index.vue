<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-vue
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer"
          class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer"
          class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  /**
   * SSR钩子：不能访问客户端数据如window
   * 可访问：服务端上下文context, this为undefined
   */
  // middleware: 'auth', // 指向外部的middleware/auth中间件
  middleware (context) {
    console.log('middleware钩子：页面中执行')
  },
  // 路由参数校验
  validate ({ params, query }) {
    // 校验业务
    console.log('validate钩子: 页面中执行')
    return true
  },
  // 读取数据，返回给组件
  asyncData (context) {
    // 异步业务逻辑，读取服务端数据,会和原有data数据合并
    console.log('asyncData钩子：页面中执行')
    return {
      b: 2
    }
  },
  // 读取数据，返回给vuex，store
  fetch (store) {
    console.log('fetch钩子：页面中执行')
  },

  /**
   * CSR && SSR
   * 可访问：不可访问window
   */
  beforeCreate () {
    console.log('beforeCreate钩子：服务端和客户端都有')
  },
  created () {
    console.log('crated钩子：服务端和客户端都有')
  },

  /**
   * CSR: 因为是ssr渲染，不支持keep-alive,也就没有activated和deactivated钩子
   * 可访问： window,this指向组件本身
   */
  beforeMount () {
    console.log('beforeMount钩子：组件渲染前')
  },
  mounted () {
    console.log('mounted钩子：组件渲染后')
  },
  beforeUpdate () {
    console.log('beforeUpdate钩子：组件更新前')
  },
  updated () {
    console.log('updated钩子：组件更新后')
  },
  beforeDestroy () {
    alert('beforeDestroy钩子：组件销毁前')
  },
  destroyed () {
    alert('destroyed钩子：组件销毁')
  },



}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
