
const router = [{
    path: '/platformfirst',
    name: 'platformfirst',
    component:()=>import('@/view/platform')
  },
  {
    path: '/icon',
    name: 'icon',
    component:()=>import('@/view/platform/icon')
  },
  {
    path: '/custom',
    name: 'custom',
    component:()=>import('@/view/platform/custom')
  } 
]


export default router;  