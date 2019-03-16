
const router = [{
    path: '/ElementTable',
    name: 'ElementTable',
    component:()=>import('@/view/practice/table/ElementTable')
  },
  {
    path: '/chart',
    name: 'chart',
    component:()=>import('@/view/practice/chart')
  }]


export default router;  