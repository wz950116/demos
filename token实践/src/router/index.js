import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/selectOrgan', component: () => import('@/views/selectOrgan/index'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      name: 'dashboard',
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      },
      {
        path: 'tableAuto',
        name: 'tableAuto',
        component: () => import('@/views/tableAuto/index'),
        meta: { title: 'dynamicTable', icon: 'example' }
      }
    ]
  }

]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/sys',
    component: Layout,
    redirect: '/example/table',
    name: 'systemManage',
    meta: { title: 'sys', icon: 'example' },
    children: [
      {
        path: 'group/index',
        name: 'groupManage',
        component: () => import('@/views/sys/group'),
        meta: { title: 'group', icon: 'lock' }
      },
      {
        path: 'organ/index',
        name: 'organManage',
        component: () => import('@/views/sys/organ'),
        meta: { title: 'organ', icon: 'lock' }
      },
      {
        path: 'role/index',
        name: 'roleManage',
        component: () => import('@/views/sys/role'),
        meta: { title: 'role', icon: 'lock' }
      },
      {
        path: 'user/index',
        name: 'userManage',
        component: () => import('@/views/sys/user'),
        meta: { title: 'user', icon: 'lock' }
      },
      {
        path: 'staff/index',
        name: 'staffManage',
        component: () => import('@/views/sys/staff'),
        meta: { title: 'staff', icon: 'lock' }
      },
      {
        path: 'authFunc/grantGroup/index',
        name: 'grantGroupManage',
        component: () => import('@/views/sys/authFunc/grantGroup'),
        meta: { title: 'grantGroup', icon: 'lock' }
      },
      {
        path: 'authFunc/grantOrgan/index',
        name: 'grantOrganManage',
        component: () => import('@/views/sys/authFunc/grantOrgan'),
        meta: { title: 'grantOrgan', icon: 'lock' }
      },
      {
        path: 'authFunc/grantRole/index',
        name: 'grantRoleManage',
        component: () => import('@/views/sys/authFunc/grantRole'),
        meta: { title: 'grantRole', icon: 'lock' }
      },
      {
        path: 'authFunc/userRole/index',
        name: 'userRoleManage',
        component: () => import('@/views/sys/authFunc/userRole'),
        meta: { title: 'userRole', icon: 'lock' }
      },
      {
        path: 'authFunc/delegateGrantToUser/index',
        name: 'delegateGrantToUserManage',
        component: () => import('@/views/sys/authFunc/delegateGrantToUser'),
        meta: { title: 'delegateGrantToUser', icon: 'lock' }
      },
      {
        path: 'authFunc/grantFromUser/index',
        name: 'grantFromUserManage',
        component: () => import('@/views/sys/authFunc/grantFromUser'),
        meta: { title: 'grantFromUser', icon: 'lock' }
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    redirect: '/data/tableInfo',
    name: 'data',
    meta: { title: 'data', icon: 'table' },
    children: [
      {
        path: 'table/tableInfo',
        name: 'BaseData',
        component: () => import('@/views/baseData/index'),
        meta: { title: 'baseData', icon: 'table' }
      },
      {
        path: 'table/ddMaterial',
        name: 'DdMaterial',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'usertable', icon: 'table' }
      },
      {
        path: 'table/ddSpecification',
        name: 'DdSpecification',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'ddSpecification', icon: 'table' }
      },
      {
        path: 'table/ddPrdct',
        name: 'DdPrdct',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'ddPrdct', icon: 'table' }
      },
      {
        path: 'table/ddOrigin',
        name: 'DdOrigin',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'ddOrigin', icon: 'table' }
      },
      {
        path: 'table/exchange',
        name: 'DdExchange',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'exchange', icon: 'table' }
      },
      {
        path: 'table/fproduct',
        name: 'DdFproduct',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'fproduct', icon: 'table' }
      },
      {
        path: 'table/countries',
        name: 'DdCountries',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'countries', icon: 'table' }
      },
      {
        path: 'table/currency',
        name: 'DdCurrency',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'currency', icon: 'table' }
      },
      {
        path: 'table/measureUnit',
        name: 'DdMeasureUnit',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'measureUnit', icon: 'table' }
      },
      {
        path: 'table/account',
        name: 'DdAccount',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'account', icon: 'table' }
      },
      {
        path: 'table/valueMark',
        name: 'DdValueMark',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'valueMark', icon: 'table' }
      },
      {
        path: 'table/fcompany',
        name: 'DdFcompany',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'fcompany', icon: 'table' }
      },
      {
        path: 'table/bank',
        name: 'DdBank',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'bank', icon: 'table' }
      },
      {
        path: 'table/futreContract',
        name: 'DdFutreContract',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'futreContract', icon: 'table' }
      },
      {
        path: 'table/priceAttr',
        name: 'DdPriceAttr',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'priceAttr', icon: 'table' }
      },
      {
        path: 'table/bankAccount',
        name: 'DdBankAccount',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'bankAccount', icon: 'table' }
      },
      {
        path: 'table/currencyRelation',
        name: 'DdCurrencyRelation',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'currencyRelation', icon: 'table' }
      },
      {
        path: 'table/brand',
        name: 'DdBrand',
        component: () => import('@/views/baseData/norm/index'),
        meta: { title: 'brand', icon: 'table' }
      },
      {
        path: 'grade',
        name: 'grade',
        component: () => import('@/views/baseData/grade/index'),
        meta: { title: 'grade', icon: 'table' }
      },
      {
        path: 'area',
        name: 'area',
        component: () => import('@/views/baseData/area/index'),
        meta: { title: 'area', icon: 'tree' }
      },
      {
        path: 'market',
        name: 'market',
        component: () => import('@/views/baseData/market/index'),
        meta: { title: 'market', icon: 'tree' }
      },
      {
        path: 'dateSet',
        name: 'dateSet',
        component: () => import('@/views/baseData/dateSet/index'),
        meta: { title: 'workDaySet', icon: 'table' }
      },
      {
        path: 'marketDaySet',
        name: 'marketDaySet',
        component: () => import('@/views/baseData/marketDaySet/index'),
        meta: { title: 'marketDaySet', icon: 'table' }
      },
      {
        path: 'munitGroup',
        name: 'munitGroup',
        component: () => import('@/views/baseData/munitGroup/index'),
        meta: { title: 'munitGroup', icon: 'table', roles: ['admin'] }
      },
      {
        path: 'productCategory',
        name: 'productCategory',
        component: () => import('@/views/baseData/productCategory/index'),
        meta: { title: 'productCategory', icon: 'tree', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/sys/log',
    component: Layout,
    redirect: '/sys/log/index',
    children: [
      {
        path: 'index',
        label: '',
        name: 'sysLog',
        component: () => import('@/views/sys/log'),
        meta: { title: 'log', icon: 'bug' }
      }
    ]
  },
  {
    path: '/sys/job',
    component: Layout,
    redirect: '/sys/job/index',
    children: [
      {
        path: 'index',
        label: '',
        name: 'sysJob',
        component: () => import('@/views/sys/job'),
        meta: { title: 'job', icon: 'bug' }
      }
    ]
  },
  {
    path: '/msg',
    component: Layout,
    name: 'msg',
    meta: { title: 'msg', icon: 'message' },
    children: [
      {
        path: 'supplier',
        name: 'msgSupplier',
        component: () => import('@/views/msg/supplier/index'),
        meta: { title: 'msgSupplier', icon: 'message' }
      },
      {
        path: 'func',
        name: 'msgFunc',
        component: () => import('@/views/msg/func/index'),
        meta: { title: 'msgFunc', icon: 'message' }
      },
      {
        path: 'temp',
        name: 'msgTemp',
        component: () => import('@/views/msg/temp/index'),
        meta: { title: 'msgTemp', icon: 'message' }
      },
      {
        path: 'channel',
        name: 'msgChannel',
        component: () => import('@/views/msg/channel/index'),
        meta: { title: 'msgChannel', icon: 'message' }
      },
      {
        path: 'channelRelative',
        name: 'msgChannelRelative',
        component: () => import('@/views/msg/channelRelative/index'),
        meta: { title: 'msgChannelRelative', icon: 'message' }
      }
    ]
  },
  {
    path: '/mybpm',
    component: Layout,
    name: 'mybpm',
    meta: { title: 'mybpm', icon: 'message' },
    children: [
      {
        path: 'myprocesslist',
        name: 'myProcessList',
        component: () => import('@/views/mybpm/myprocesslist/index'),
        meta: { title: 'myProcessList', icon: 'message' }
      },
      {
        path: 'mytasklist',
        name: 'myTasklist',
        component: () => import('@/views/mybpm/mytasklist/index'),
        meta: { title: 'myTasklist', icon: 'message' }
      },
      {
        path: 'myhisprocesslist',
        name: 'myHisProcessList',
        component: () => import('@/views/mybpm/myhisprocesslist/index'),
        meta: { title: 'myHisProcessList', icon: 'message' }
      },
      {
        path: 'myhistasklist',
        name: 'myHisTasklist',
        component: () => import('@/views/mybpm/myhistasklist/index'),
        meta: { title: 'myHisTasklist', icon: 'message' }
      }
    ]
  },
  {
    path: '/bpm',
    component: Layout,
    name: 'bpm',
    meta: { title: 'bpm', icon: 'message' },
    children: [
      {
        path: 'pdlist',
        name: 'pdList',
        component: () => import('@/views/bpm/pdlist/index'),
        meta: { title: 'pdList', icon: 'message' }
      },
      {
        path: 'modellist',
        name: 'modelList',
        component: () => import('@/views/bpm/modellist/index'),
        meta: { title: 'modelList', icon: 'message' }
      },
      {
        path: 'deploylist',
        name: 'deployList',
        component: () => import('@/views/bpm/deploylist/index'),
        meta: { title: 'deployList', icon: 'message' }
      }
    ]
  },
  {
    path: '/iframe',
    component: Layout,
    redirect: '/iframe',
    hidden: true,
    children: [{
      path: ':routerPath',
      component: () => import('@/views/iframe/index'),
      name: 'iframe',
      meta: {
        title: 'iframe',
        icon: 'people'
      }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
