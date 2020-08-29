import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/base/Test'
import Second from '@/components/base/Second'
import list from '@/components/base/list'
import WeChat from '@/components/sub/WeChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/weChat',
      name: 'WeChat',
      component: WeChat
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
