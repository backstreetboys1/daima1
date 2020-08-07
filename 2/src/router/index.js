import Vue from 'vue'
import VueRouter from 'vue-router'
import shou from '@/components/shou'
import yu from '@/components/yu'
import nan from '@/components/nan'
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/yu'
    },
    {
      path: '/yu',
      name: 'yu',
      component: yu
    },
    {
      path: '/shou',
      name: 'shou',
      component: shou
    },
    {
      path: '/nan',
      name: 'nan',
      component: nan
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
