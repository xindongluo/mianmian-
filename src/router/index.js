import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: () => import('@/views/logout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home') },
      { path: '/question', name: 'question', component: () => import('@/views/question') },
      { path: '/video', name: 'videl', component: () => import('@/views/video') },
      { path: '/user', name: 'user', component: () => import('@/views/user') }
    ]
  },
  { path: '/user/profile', name: 'profile', component: () => import('@/views/user/Profile.vue') },
  { path: '/user/chat', name: 'chat', component: () => import('@/views/user/Chat.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/user/Login.vue') },
  { path: '/search', name: 'search', component: () => import('@/views/search') },
  { path: '/search/result', name: 'search-result', component: () => import('@/views/search/Result.vue') },
  { path: '/article', name: 'article', component: () => import('@/views/home/Article.vue') }

]

const router = new VueRouter({
  routes
})

export default router
