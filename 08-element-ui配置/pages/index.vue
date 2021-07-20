<template>
  <div class="container">
    <h3>{{aaa}}</h3>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '1',
      aaa: '首页'
    }
  },
  async asyncData ({ $axios }) {
    // 读取同域资源
    const res = await $axios({
      url: '/data/list.json'
    })

    // // 读取跨域资源
    // const res2 = await $axios({
    //   url: '/api/home' // 走nuxt.config中的axios代理配置
    // })
    return {
      title: res.data.title
      // msg: res2.data.msg
    }
  },
  async fetch ({ $axios }) {
    // console.log(window)

    // const res = await $axios({
    //   url: '/data/list.json'
    // })
    // this.title = res.data.title // TODO:为啥不起作用？
    // console.log(this.title)
  }
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
