import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forum_Feed.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "about" */ '../views/Events_Feed.vue')
  },
  {
    path: '/eventpost/:id',
    name: 'EventPost',
    component: () => import('../views/EventPostDetail.vue'),
    props: true
  },
  {
    path: '/addEvent',
    name: 'AddEvent',
    component: () => import('../views/AddEvent.vue')
  },
  {
    path: '/addPost',
    name: 'AddPostForum',
    component: () => import('../views/AddPostForum.vue')
  },
  {
    path: '/forumpost/:id',
    name: 'ForumPost',
    component: () => import('../views/ForumPostDetail.vue'),
    props: true
  },
  {
    path: '/addTP',
    name: 'AddTP',
    component: () => import('../views/AddTP.vue')
  },
  {
    path: '/TP/:id',
    name: 'TPDetail',
    component: () => import('../views/TPDetail.vue'),
    props: true
  },
  {
    path: '/TPs',
    name: 'TP_Feed',
    component: () => import('../views/TP_Feed.vue'),
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router