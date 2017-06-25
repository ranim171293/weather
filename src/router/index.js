import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import New from '@/components/New'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
