const routes = [
  {
    path: '/',
    displayName: 'home',
    name: 'home',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'changePWD', name: 'changePWD', displayName: 'changePWD', component: () => import('pages/changePWDPage.vue') },
      { path: 'forgetPWD', name: 'forgetPWD', displayName: 'forgetPWD', component: () => import('pages/forgetPWDPage.vue') },
      { path: 'admin', name: 'admin', displayName: 'admin', component: () => import('layouts/adminLogin.vue') }
    ]
  },
  {
    path: '/board/:id',
    name: 'boards',
    displayName: 'board',
    component: () => import('layouts/BoardLayout.vue')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('src/pages/ErrorNotFound.vue'),
    meta: {
      title: '購物網 | 404',
      login: false,
      admin: false
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/404'
  }
]

export default routes
