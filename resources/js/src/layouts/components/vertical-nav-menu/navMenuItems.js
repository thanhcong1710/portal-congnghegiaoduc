/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/',
    name: 'Dashboard',
    icon: 'HomeIcon',
    slug: 'dashboard',
    permission:'dashboard',
  },
  {
    header: 'Học Tập',
    icon: 'PackageIcon',
    items: [
      {
        url: '/crm/parent',
        name: 'Lịch học',
        icon: 'CalendarIcon',
        slug: 'crm-parent',
      },
      {
        url: '/crm/imports',
        name: 'Chuyên cần',
        icon: 'UserCheckIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Lộ trình',
        icon: 'TrendingUpIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Kết quả',
        icon: 'TrelloIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Bảng điểm',
        icon: 'ClipboardIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Chứng nhận',
        icon: 'AwardIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Nội quy',
        icon: 'AlertTriangleIcon',
        slug: 'crm-imports',
      }
    ]
  },
  {
    header: 'Tài Khoản',
    icon: 'PackageIcon',
    items: [
      {
        url: '/crm/imports',
        name: 'Quản lý tài khoản',
        icon: 'UserIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Góp ý & phản hồi',
        icon: 'HelpCircleIcon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Giới thiệu học viên',
        icon: 'Share2Icon',
        slug: 'crm-imports',
      },
      {
        url: '/crm/imports',
        name: 'Câu hỏi thường gặp',
        icon: 'MessageCircleIcon',
        slug: 'crm-imports',
      }
    ]
  },
]

