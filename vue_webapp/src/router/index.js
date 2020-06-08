import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '../views/Calendar.vue'
import GroupCalendar from '../views/GroupCalendar.vue'
import Group from '../views/Group.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddEvent from '../views/AddEvent.vue'
import Axios from 'axios'
import store from '../store/modules/users'

Vue.prototype.$http = Axios;
Vue.use(VueRouter)

function checkAuthentication(to, from, next) {
  if (!store.state.access_token) {
    next('/login');
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'calendar',
    component: Calendar,
    beforeEnter: checkAuthentication
  },
  {
    path: '/groupcalendar',
    name: 'group_calendar',
    component: GroupCalendar,
    beforeEnter: checkAuthentication
  },
  {
    path: '/group',
    name: 'group',
    component: Group,
    beforeEnter: checkAuthentication
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: checkAuthentication
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    beforeEnter: checkAuthentication
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/addevent',
    name: 'addevent',
    component: AddEvent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
