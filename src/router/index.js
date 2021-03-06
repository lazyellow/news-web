import Vue from 'vue'
import Router from 'vue-router'

// 引用定义好的路由组件
import Home from '@/components/Home/home'
import First from '@/components/First/first'
import School from '@/components/School/school'
import Allnews from '@/components/Allnews/allnews'
import Hotnews from '@/components/Hotnews/hotnews'
import News from '@/components/News/news'
import Campus from '@/components/Campus/campus'
import Notice from '@/components/Notice/notice'
import Achievement from '@/components/Academic/achievement'
import Dynamic from '@/components/Academic/dynamic'
import Competition from '@/components/Academic/competition'
import People from '@/components/People/people'
import Detail from '@/components/Detail/detail'
import Search from '@/components/Search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/First',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'First',
          name: 'First',
          component: First
        },{
          path:'Allnews',
          name: 'Allnews',
          component: Allnews
        },{
          path:'Hotnews',
          name: 'Hotnews',
          component: Hotnews
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
        // {
        //   path: 'Achievement',
        //   name: 'Achievement',
        //   component: Achievement
        // },
        {
          path: 'Dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        // {
        //   path: 'Competition',
        //   name: 'Competition',
        //   component: Competition
        // },
        {
          path: 'People',
          name: 'People',
          component: People
        },
        {
          path: 'Detail/:news_id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'Search/:cid/:keyWord',
          name: 'Search',
          component: Search
        }
      ]
    }
  ]
 
})
