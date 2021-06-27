<template>
  <div>第{{$route.params.id || '--'}}个商品详情</div>
</template>

<script>
export default {
  name: 'GoodsDetail',
  data () {
    return {
    }
  },
  created () {
  },
  // 校验参数
  validate ({ params, query }) {
    return typeof params.id === 'number'
  },
  transition: 'test'

}
</script>

<style scoped>
/* .test-enter-active,
.test-leave-active {
  transition: 0.5s ease all;
}
.test-enter,
.test-leave-to {
  margin-left: -1000px;
} */
</style>