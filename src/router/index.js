import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import First from '@/components/First/first'
import School from '@/components/School/school'
import News from '@/components/News/news'

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
        }
      ]
    },
  ]
})
