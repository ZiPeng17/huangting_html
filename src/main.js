// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import index from './index'
import login from './login'
import mainpage from './App'
import jst from './components/jsTable/jsTable'

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

import global_config from './config.js'
Vue.prototype.global = global_config
Vue.prototype.inputReg = /^[2-9]{1}$|^[1-9]{1}\d{1,3}$|^[1-4]{1}\d{4}$|^50000$/
Vue.prototype.session = (money) => {
  var user = JSON.parse(window.sessionStorage.getItem("userinfo"));
  user.money = money;
  window.sessionStorage.setItem("userinfo", JSON.stringify(user));
  location.reload()
}

var router = new VueRouter({
  routes: [
    //首页
    {
      path: '/',
      name: 'login',
      component:login
    },
    //Project
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage
    }
  ]
})

new Vue({
  el: '#app',
  mode:'history',
  router,
  template: '<index/>',
  components: { index }
});