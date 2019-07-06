import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'


import Home from '@/view/home'
import HumanHair from '@/view/human-hair'
import Product from '@/view/product'
import Car from '@/view/car'
import Login from '@/view/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
//    hidden: true
    },
    {
      path: '/human-hair',
      name: 'human-hair',
      component: HumanHair
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  
    
  ]
})
