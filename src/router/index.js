import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import New from '@/components/New'
import Home from '@/components/Home'
import Addweather from '@/components/Addweather'
import Weather from '@/components/Weather'

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
    },
    {
      path: '/addweather',
      name: 'addweather',
      component: Addweather
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    }
  ]
})
