// append  exact

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const users = {
  template:`
    <div>
        <h2>Users</h2>
        <router-view></router-view>
    </div>
  `
}
const Home = {template:'<div>Home内容</div>'}
const about = {template:'<div>about内容</div>'}
const user = {
  template:`
    <div>
        {{$route.params.username}}
    </div>
  `
}
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',name:'Home',components:Home},
    {path:'/',name:'about',components:about},
    {path:'/users',
      component:users,
      children:[
        {path:':username',name:'user',component:user},
      ]
    }
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
                    <li><router-link :to="{path:'/users/wos',query:{aaa:'bbb'}}">wos</router-link></li>
                    <li><router-link to="about" append>append</router-link></li>
                    <li><router-link to="about" exact>exact</router-link></li>
                    
                </ol>
                <!--<router-link to="about" tag="li">link</router-link>-->
        </ol>
        <router-view></router-view>
    </div>
      `
}).$mount('#app')
