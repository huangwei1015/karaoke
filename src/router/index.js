import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../components/video/VideoLive.vue'
import Header from '../components/video/VideoHeader.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Video',
    component: Video
  },{
    path:'/Header',
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
