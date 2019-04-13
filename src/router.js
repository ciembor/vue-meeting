import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vote from './views/Vote.vue'
import Score from './views/Score.vue'
import Settings from './views/Settings.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'vote',
      name: 'vote',
      component: Vote
    },
    {
      path: 'score',
      name: 'score',
      component: Score
    },
    {
      path: 'settings',
      name: 'settings',
      component: Settings
    }
  ]
})
