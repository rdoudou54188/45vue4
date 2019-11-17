import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Index from "../views/Index";
import Register from "../views/Register";
import Productlist from "../views/Productlist";
import details from "../views/details";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: Register
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: Productlist
  },
{
  path: '/details',
      name: 'details',
    component: details
},
  {
    path:'/cart',
    name:'cart',
    component:Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
