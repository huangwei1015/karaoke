import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../components/video/VideoLive.vue'
import Header from '../components/video/VideoHeader.vue'
import Join from '../views/join/index.vue'
import Push from '../views/push/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/join',
    name: 'join',
    component: Join
  },
  {
    path: '/push',
    name: 'push',
    component: Push
  },
  {
    path: '/',
    name: 'Video',
    component: Video
  },{
    path:'/header',
    name:'Header',
    component:Header
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
