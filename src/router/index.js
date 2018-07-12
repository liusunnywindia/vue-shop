import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import HelloWorld from '@/components/HelloWorld'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'product',
      component: product

    }
  ]
})
