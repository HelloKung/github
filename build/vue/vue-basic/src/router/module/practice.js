
const router = [{
    path: '/ElementTable',
    name: 'ElementTable',
    component:()=>import('@/view/practice/table/ElementTable')
  },
  {
    path: '/timemap',
    name: 'timemap',
    component:()=>import('@/view/practice/chart/timemap')
  }]


export default router;  