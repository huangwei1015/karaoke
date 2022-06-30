import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../components/video/VideoLive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Video',
    component: Video
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
