<template>
  <div>
    <h3>评论</h3>
    <nuxt-link :to="{name: 'goods-comments-uid', params: {uid: 1}, query: {a: 1, b: 2}}">评论1
    </nuxt-link>
    <nuxt-link to="/goods/comments/2?a=1&b=2">评论2</nuxt-link>

    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>