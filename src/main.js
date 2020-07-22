import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共样式
// import "./assets/css/base.css"

// 字体图标
import "./assets/font/iconfont.css";

// vant组件库
// $cnpm i vant -S  $命令行输入
import Vant from "vant";
import "vant/lib/index.css";

// 配置axios
// $cnpm i axios -S
import axios from "axios";
axios.defaults.baseURL = "http://120.25.169.22:3000/"
Vue.prototype.$axios = axios;

// 插件
import "swiper/css/swiper.min.css";

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')