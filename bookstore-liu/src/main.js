
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/index.less'
//使用 vue-lazyload技术实现图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);

new Vue({
  el: '#app',
  router,
  ...App
});
