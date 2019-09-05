// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/style.scss';
import "swiper/dist/css/swiper.css";
import VueAweSwiper from "vue-awesome-swiper";
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI);
Vue.use(VueAweSwiper)
Vue.config.productionTip = false
import card from "./components/card";
Vue.component('m-card', card)
import ListCard from "./components/ListCard";
Vue.component('list-card', ListCard)
import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/web/api',
  // baseURL: 'http://localhost:3000/web/api'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
