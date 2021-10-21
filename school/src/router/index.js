import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../components/Login.vue')
    },
    {
      path: '/Home',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/timetable',
      name: 'timetable',
      meta: { layout: 'main' },
      component: () => import('../views/Timetable.vue')
    },
    {
      path: '/collective',
      name: 'collective',
      meta: { layout: 'main' },
      component: () => import('../views/Collective/Collective.vue')
    },
    {
      path: '/album',
      name: 'album',
      meta: { layout: 'main' },
      component: () => import('../views/Album.vue')
    },
    {
      path: '/news',
      name: 'news',
      meta: { layout: 'main' },
      component: () => import('../views/News/News.vue')
    },
    {
      path: '/post/:id',
      name: 'addteacher',
      meta: { layout: 'main' },
      component: () => import('../views/News/PostIdPage.vue')
    },
    {
      path: '/addteacher',
      name: 'addteacher',
      meta: { layout: 'empty' },
      component: () => import('../views/Collective/AddNewTeacher')
    },
    {
      path: '/addpost',
      name: 'addpost',
      meta: { layout: 'empty' },
      component: () => import('../views/News/AddNewPost')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main' },
      component: () => import('../views/History')
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: { layout: 'main' },
      component: () => import('../views/Contacts')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
