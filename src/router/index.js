import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import First from '@/components/First/first'
import School from '@/components/School/school'
import News from '@/components/News/news'
import Campus from '@/components/Campus/campus'
import Notice from '@/components/Notice/notice'
import Achievement from '@/components/Academic/achievement'
import Dynamic from '@/components/Academic/dynamic'
import Competition from '@/components/Academic/competition'
import People from '@/components/People/people'
import Detail from '@/components/Detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'First',
          name: 'First',
          component: First
        },
        {
          path: 'School',
          name: 'School',
          component: School
        },
        {
          path: 'News',
          name: 'News',
          component: News
        },
        {
          path: 'Campus',
          name: 'Campus',
          component: Campus
        },
        {
          path: 'Notice',
          name: 'Notice',
          component: Notice
        },
        {
          path: 'Achievement',
          name: 'Achievement',
          component: Achievement
        },
        {
          path: 'Dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        {
          path: 'Competition',
          name: 'Competition',
          component: Competition
        },
        {
          path: 'People',
          name: 'People',
          component: People
        },
        {
          path: 'detail',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
