import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'
import product from '@/pages/productList'
import productDetail from '@/pages/productDetail'
import userinfo from '@/pages/userinfo'
import order from '@/pages/order'
import money from '@/pages/money'
import review from '@/pages/addReview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      component: index,
      name: index,
      children: [
        {
          path: '/product',
          name: 'product',
          component: product,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }

        },
        {
          path: '/userinfo',
          name: 'userinfo',
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
          component: userinfo
        },
        {
          path: '/productDetail',
          name: 'productDetail',
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
          component: productDetail
        },
        {
          path: '/order',
          component: order,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
          name: 'order'

        },
        {
          path: '/money',
          component: money,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
          name: 'money'
        },
        {
          path: 'review',
          component: review,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
          name: 'review'
        }
      ]

    }

  ]
})
