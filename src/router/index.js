import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Message from '@/components/ArticleMessage'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/web/',
  routes: [
    {
      path: '/',
      // name: 'Main',
      component: resolve=>require(['../components/Main.vue'], resolve),
      children: [{
        path: '',
        redirect: 'home'
      },{
        path: 'home',
        name: 'home',
        component: resolve=>require(['../components/Home.vue'], resolve)
      },{
        path: '/article/:id',
        name: 'article',
        component: resolve=>require(['../components/ArticleMessage.vue'], resolve),
        props: (app) =>({id: app.params.id})
      }]
    },
    {
      path: '/hero/:id',
      name: 'hero',
      component: resolve=>require(['../components/Hero.vue'], resolve),
      props: (app) => ({id: app.params.id})
    }
  ]
})
