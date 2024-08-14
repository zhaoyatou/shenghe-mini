import App from './App'
import Vue from 'vue'
import uView from 'uview-ui'
import API from './utils/utils_ajax.js'


Vue.use(uView)

Vue.config.productionTip = false
Vue.prototype.$API = API

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()