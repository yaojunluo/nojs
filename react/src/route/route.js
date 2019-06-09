
import Home from '../components/Home'
import Todo from '../components/Todolist'
import Contents from '../components/Contents'
import Redirects from '../components/Redirects'
import IndexMain from '../components/Home/IndexMain'
import NoEdit from '../components/Edit/NoEdit'
import User from '../components/User'

export default [
    {
      path: "/",
      component: Redirects,
      exact:true
    },
    {
      path: "/index",
      component: Home,
        routes: [
          {
            path: "/index",
            component: IndexMain
          },
          {
            path: "/index/user",
            component: User
          }
        ]
      
    },
    {
      path: "/todo",
      component: Todo,
      exact: true
    },
    {
      path: "/content/:aid",
      component: Contents
    },
    {
      path: "/edit",
      component: NoEdit
    },
    // {
    //   path: "/user",
    //   component: User
    // },
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
];