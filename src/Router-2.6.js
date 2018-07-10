// 引入外部组件

import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './tranisition'
Vue.use(VueRouter)

const Home = {
  template:`
    <div>
        <h2>Home</h2>
        <p>This is Home</p>
    </div>
  `
}

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/Parent',component:Parent},
  ]
})
new Vue({
  router,
  template:`
    <div id="app">
        <h1>This is Transition</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/Parent">/Parent</router-link></li>
        </ul>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
  `
}).$mount('#app')
