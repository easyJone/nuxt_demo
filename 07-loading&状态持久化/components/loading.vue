<template>
  <div v-if="loading" id="loading"></div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }

}
</script>

<style scoped>
div {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  border-radius: 1px;
  box-shadow: 0 -12px 0 3px black, /*上*/ 0 12px 0 1px #333,
    /*下*/ -12px 0 0 1px #333, /*左*/ 12px 0 0 1px #333,
    /*右*/ -9px -9px 0 1px #333, /*左上*/ 9px -9px 0 2px #333,
    /*右上*/ -9px 9px 0 1px #333, /*左下*/ 9px 9px 0 1px #333 /*右下*/;
  animation: loading 2s linear 0s infinite;
  -webkit-animation: loading 2s linear 0s infinite;
  -o-animation: loading 2s linear 0s infinite;
  -moz-animation: loading 2s linear 0s infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loading {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-o-keyframes loading {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

@-moz-keyframes loading {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
</style>