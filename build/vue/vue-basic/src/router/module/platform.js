
const router = [{
    path: '/platform',
    name: 'platform',
    component:()=>import('@/view/platform')
  },
  {
    path: '/icon',
    name: 'icon',
    component:()=>import('@/view/platform/icon')
  }]


export default router;  