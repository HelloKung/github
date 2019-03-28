
const router = [{
    path: '/platformfirst',
    name: 'platformfirst',
    component:()=>import('@/view/platform')
  },
  {
    path: '/icon',
    name: 'icon',
    component:()=>import('@/view/platform/icon')
  }]


export default router;  