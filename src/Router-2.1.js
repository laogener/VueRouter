// 路由的组件群

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const first = {template:'<div>first内容</div>'}
const second = {template:'<div>second内容</div>'}
const Home = {template:'<div>Home内容</div>'}
const aaa = {template:'<div>aaa</div>'}
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',name:'Home',components:{
        default:Home,
        left:first,
        right:second,
      }},
    {path:'/first',name:'Home-first',components:{
        default:aaa,
        left:first,
        right:second,
      }},
  ]
})
new Vue({
  router,
  template:`
    <div id="r">
        <h1>导航</h1>
        <p>{{ $route.name }}</p>
        <ol>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">first</router-link></li>
        </ol>
        <router-view class="asda"></router-view>
        <router-view class="asda" name="left" style="float:left;width: 50%;background-color: blue;height: 30px;"></router-view>
        <router-view class="asda" name="right" style="float:right;width: 50%;background-color: yellow;height: 30px;"></router-view>
    </div>
      `
}).$mount('#app')
