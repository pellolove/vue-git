import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Museui from '@/components/Museui'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/Museui',
      name: 'Museui',
      component: Museui
    }
  ]
})
