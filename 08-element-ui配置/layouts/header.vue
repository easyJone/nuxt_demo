<template>
  <nav>
    <el-button type="primary">我是按钮</el-button>
    <nuxt-link to="/index" active-class="active-nav">首页</nuxt-link>
    <nuxt-link to="/login" active-class="active-nav">登录页</nuxt-link>
    <nuxt-link to="/register" active-class="active-nav">注册页</nuxt-link>
    <nuxt-link to="/user" active-class="active-nav">用户页</nuxt-link>
    <nuxt-link to="/goods" active-class="active-nav">商品页</nuxt-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.active-nav {
  background-color: lightblue;
  color: red;
}
</style>