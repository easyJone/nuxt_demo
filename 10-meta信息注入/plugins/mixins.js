// 全局方法
import Vue from 'vue'
const show = () => console.log('全局show')
Vue.prototype.$show = show

// 全局过滤器
import * as filters from '../assets/script/filters'
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

// 全局指令
import direc1 from '../assets/script/directives/direc1'
Vue.directive('direc1', direc1)

// 全局组件
import Abutton from '../components/global/Abutton.vue'
Vue.component('Abutton', Abutton)

Vue.mixin({
  methods: {
    $seo (title, content, payload = []) {
      return {
        title,
        meta: [
          {
            hid: 'description',
            content,
            name: 'keywords'
          }
        ].concat(payload)
      }

    }
  }
})
