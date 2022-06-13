import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/newProgram',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/NewProgram.vue') },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'program/create',
        component: () => import('src/pages/CreateProgramPage.vue'),
      },
      {
        path: 'program/:program_id/attendance/manage',
        component: () => import('src/pages/LecturerAttendancePage.vue'),
      }
    ],
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
