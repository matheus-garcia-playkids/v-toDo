import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home.vue'
import User from '@/modules/User.vue'

Vue.use(Router);

export default new
Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/users', name: 'users', component: User }
  ]
})
