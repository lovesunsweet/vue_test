// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' 
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$axios = Axios
// Vue.prototype.$HOST = "/api"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{foo:"MAYDAY"},
  components: { App },
  template: '<App/>'
})
