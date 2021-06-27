<template>
  <div class="goods-page">
    <h3>商品页面</h3>
    <nuxt-link to="/goods/1?a=1&b=2">详情页1</nuxt-link>
    <nuxt-link :to="{ name: 'goods-id', params: { id: 2 }, query: { a: 1, b: 2 } }">详情页3</nuxt-link>
    <nuxt-link :to="{ name: 'goods-id', params: { id: 3 }, query: { a: 1, b: 2 } }">详情页3</nuxt-link>
    <nuxt-link to="/goods/comments">评论页</nuxt-link>

    <!-- 子路由展示区 -->
    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>