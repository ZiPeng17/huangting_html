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
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
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