<template>
  <div class="login-page">
    <h3>登录页面</h3>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$axios({
        url: '/api/login',
        methods: 'post',
        data: {
          username: 'aa',
          password: 'xx'
        }
      }).then(res => {
        // 同步cookie和vuex
        this.$cookies.set('user', res.data)
        this.$store.commit('user/M_UPDATE_USER', res.data)

        if (!this.$route.query.redirectPath || /login|register/.test(this.$route.query.redirectPath)) {
          this.$router.replace('/index')
        } else {
          this.$router.replace(this.$route.query.redirectPath)
        }

      })
    }
  }

}
</script>

<style>
</style>