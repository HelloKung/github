
const router = [{
    path: '/ElementTable',
    name: 'ElementTable',
    component:()=>import('@/view/practice/table/ElementTable')
  },{
    path: '/word',
    name: 'word',
    component:()=>import('@/view/practice/table/word')
  },{
    path: '/node',
    name: 'node',
    component:()=>import('@/view/practice/table/node')
  },
  {
    path: '/timemap',
    name: 'timemap',
    component:()=>import('@/view/practice/chart/timemap')
  },
  {
    path: '/drillmap',
    name: 'drillmap',
    component:()=>import('@/view/practice/chart/drillmap')
  },
  {
    path: '/dynamicchart',
    name: 'dynamicchart',
    component:()=>import('@/view/practice/chart/dynamicchart')
  },
  {
    path: '/maptalks',
    name: 'maptalks',
    component:()=>import('@/view/practice/map/maptalks')
  }]

  
export default router;  