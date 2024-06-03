
export default {
  router: {
    path: '/student/calendar',
    component: () => import('@/layouts/main/Main.vue'),
    children: [
      {
        path: '/student/calendar',
        name: 'student-calendar',
        component: () => import('@/views/students/calendar.vue'),
        meta: {
          breadcrumb: [
            { title: 'Home', url: '/' },
            { title: 'Lịch học', active: true }
          ],
          pageTitle: 'Lịch học',
          rule: 'editor'
        }
      },
      {
        path: '/student/attendance',
        name: 'student-attendance',
        component: () => import('@/views/students/attendance.vue'),
        meta: {
          breadcrumb: [
            { title: 'Home', url: '/' },
            { title: 'Chuyên cần', active: true }
          ],
          pageTitle: 'Chuyên cần',
          rule: 'editor'
        }
      },
    ]
  },
}
