import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

const Dashboard = () => import('@/views/Dashboard')

// Components
//const Dashboard = () => import('@components/Dashboard')
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
