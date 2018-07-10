// 编程式的导航


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = {
  template:`
    <div>
        <h2>Home</h2>
        <p>This is Home-{{$route.query.a}}</p>
    </div>
  `
}
const Parent = {
  template:`
    <div>
        <h2>Parent</h2>
        <p>This is Parent</p>
    </div>
  `
}
const Page404 = {
  template:`
    <div>
        <h2>Page404</h2>
        <p>This is Page404</p>
    </div>
  `
}
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/Parent',component:Parent},
    {path:'*',component:Page404},
  ]
})
new Vue({
  router,
  template:`
    <div id="app">
        <button @click="houtui">后退</button>
        <button @click="qianjin">前进</button>
        <button @click="home">返回首页</button>
        <button @click="query">query</button>
        <h1>This is Transition</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/Parent">/Parent</router-link></li>
            <li><router-link to="/aaaaa">Where no here</router-link></li>
        </ul>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
  `,
  methods:{
    houtui:function () {
      router.go(-1)
    },
    qianjin:function () {
      router.go(1)
    },
    home:function () {
      router.push('/')
    },
    query:function () {
      router.push({path:'/',query:{a:1,b:1}})
    },
  }
}).$mount('#app')
