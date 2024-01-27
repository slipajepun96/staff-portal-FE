import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import StaffMainView from '../views/staff/StaffMainView.vue'
import StaffRecordEdit from '../views/staff/StaffRecordEdit.vue'
import StaffRecordView from '../views/staff/StaffRecordView.vue'
// import ForgetPasswordView from '@/views/ForgetPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    // {
    //   path: '/forget-password',
    //   name: 'forget-password',
    //   component: ForgetPasswordView
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffMainView,
      children:[
        {
          path:'',
          name:'staff-record-view',
          component:StaffRecordView,
        },
        {
          path:'record-edit',
          name:'record-edit',
          component:StaffRecordEdit,
        }
      ]
    }

  ]
})

export default router
