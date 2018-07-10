// 嵌套路由

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const first = {template:'<div>first内容</div>'}
const second = {template:'<div>second内容</div>'}
const Home = {template:'<div>Home内容</div>'}
const firstFirst = {template:'<div>firstFirst内容{{$route.params.id}}</div>'}
const firstSecond = {template:'<div>firstSecond内容{{$route.params.id}}</div>'}

const zujian = {
  template:`
    <div class="zujian">
        <h2>组件</h2>
        <router-view class="zujian"></router-view>
    </div>
  `
}
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',name:'Home',components:{
        default:Home,
        left:first,
        right:second,
      }},
    {path:'/first',
      component:zujian,

      children:[
        {path:'/',name:'Home-first',component:first},
        {path:'first',name:'Home-firstFirst',component:firstFirst},
        {path:'second',name:'Home-firstSecond',component:firstSecond},
      ]
    },
    {path:'/second',name:'Home-second',component:second},
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
                <ol>
                    <li><router-link :to="{ name: 'Home-firstFirst', params: { id: 123 }}">first</router-link></li>
                    <li><router-link :to="{ name: 'Home-firstSecond', params: { id: 456 }}">second</router-link></li>
                </ol>
            <li><router-link to="/second">second</router-link></li>
        </ol>
        <router-view class="asda"></router-view>
    </div>
      `
}).$mount('#app')
