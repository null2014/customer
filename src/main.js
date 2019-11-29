// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Customers from './components/Customers'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import echarts from 'echarts'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
import Chart from './components/Chart'





Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.use(Axios)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    { path: "/about", component: About },
    { path: "/add", component: Add },
    { path: "/customers/:id", component: CustomerDetails },
    { path: "/edit/:id", component: Edit },
    { path: "/chart", component: Chart },
    
   
    
  ]
})

/* eslint-disable no-new */
new Vue({
  router:router,
  template: `
    <div id="app">
    <nav class="navbar navbar-defult">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用戶管理系統</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">主頁</router-link></li>
            <li><router-link to="/department">用戶部門</router-link></li>
            <li><router-link to="/about">關於我們</router-link></li>
          </ul>
          <ul class="nav navbar-right">
            <li><router-link to="/add">添加用戶</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-view></router-view>
    </div>`

}).$mount("#app")
