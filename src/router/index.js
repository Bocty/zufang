import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const HomePage = () => import('@/views/HomePage')
const Info = () => import('@/views/Info')
const Find = () => import('@/views/Find')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const City = () => import('@/views/City')
const Lease = () => import('@/views/Lease')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/homepage',
    children: [
      { path: 'homepage', component: HomePage },
      { path: 'info', component: Info },
      { path: 'find', component: Find },
      { path: 'my', component: My, name: 'my' }

    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: City },
  { path: '/lease', component: Lease }
]

const router = new VueRouter({
  routes
})

export default router
