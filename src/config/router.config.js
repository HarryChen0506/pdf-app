// import React from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import Demo from '@/pages/Demo'

export const ROUTE = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
}

const routerConfig = [
  {
    path: '/',
    exact: true,
    redirect: '/demo',
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/demo',
    component: Demo,
    exact: true
  },
  {
    path: '/',
    component: BasicLayout,
    authority: [], // [ admin | user ]
    routes: [
      { path: '/dashboard', name: 'dashboard', exact: true, authority: ['admin', 'user'], component: Dashboard },
    ]
  },
]

export default routerConfig
