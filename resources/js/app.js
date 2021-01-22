/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Regis from './components/Regis'
import Pulsa from './components/Pulsa'
import Login from './components/Login'
import Home from './components/Home'
import Admin from './components/Admin'
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('pulsa-component', require('./components/Pulsa.vue').default);
//Vue.component('regis-component', require('./components/Regis.vue').default);
const router = new VueRouter({
    mode : 'history',
    routes: [
      {
        path: '/daftar',
        name: 'register',
        component: Regis
      },
        {
            path: '/home',
            name: 'pulsa',
            component: Pulsa
          
        },
        {
          path: '/masuk',
          name:'login',
          component: Login
        },
        {
          path:'/index',
          name:'home',
          component: Home
        },
        {
          path:'/dashboard',
          name:'home',
          component: Admin
        }
    ]
  })
  

const app = new Vue({
    el: '#app',
   router
});
