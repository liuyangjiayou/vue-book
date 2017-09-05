import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import List from '../containers/List'
import Add from '../containers/Add'
import Collect from '../containers/Collect'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path : '/list',
      component: List
    },
    {
      path : '/add',
      component : Add
    },
    {
      path : '/collect',
      component : Collect
    },
    {
      path : '*',
      redirect : '/home'
    }
  ],
  linkActiveClass : 'active'
})
