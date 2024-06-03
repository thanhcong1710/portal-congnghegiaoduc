<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <vx-card slot="no-body">
      <vs-tabs>
        <vs-tab label="Khóa học hiện tại">
          <div class="tab-text">
            <div class="vx-row box-current-course pt-3">
              <div class="vx-col md:w-1/4 w-full mb-3" >
                <img src="@assets/images/customs/thumb_course.png" alt="Logo" width="100%">
              </div>
              <div class="vx-col md:w-1/4 w-full mb-3" >
                <h4>SKE1n-C2403HF</h4>
                <p><i class="fa-solid fa-calendar" style="color:#425bf0; margin-right: 5px"></i>  20/02/2024 -  11/12/2024</p>
                <p><i class="fa-solid fa-location-dot" style="color:#ff7f26; margin-right: 5px"></i>  Shophouse 17-09 Vinhomes Gardenia, Quận Nam Từ Liêm, Hà Nội </p>
              </div>
              <div class="vx-col md:w-1/2 w-full mb-3" >
                <h4>Tiến độ của khóa học</h4>
                <div class="vx-row">
                  <div class="vx-col md:w-1/3 text-center">
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart.chartOptions" :series="apexChatData.donutChart.series"></vue-apex-charts>
                    <p>Chuẩn bị bài trước khi đến lớp</p>
                  </div>
                  <div class="vx-col md:w-1/3 text-center">
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart1.chartOptions" :series="apexChatData.donutChart1.series"></vue-apex-charts>
                    <p>Cùng ôn tập nào</p>
                  </div>
                  <div class="vx-col md:w-1/3 text-center">
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart2.chartOptions" :series="apexChatData.donutChart2.series"></vue-apex-charts>
                    <p>Mức độ hoàn thành khóa học</p>
                  </div>
                </div>
              </div>
              <div class="vx-col md:w-1/4 w-full mb-3" >
                <vs-button class="mt-2  w-full" color="warning">XEM CHI TIẾT KHÓA HỌC</vs-button>
              </div>
            </div>
          </div>
        </vs-tab>
        <vs-tab label="Khóa học đã kết thúc">
          <div class="tab-text">
            <div class="vx-row box-history-course pt-3">
              <div class="vx-col md:w-1/3 w-full mb-3" >
                <div>
                  <img src="@assets/images/customs/thumb_course_2.png" alt="Logo" width="100%">
                  <h4 class="mt-3 mb-2">SM4new-Da2302HF</h4>
                  <p><i class="fa-solid fa-calendar" style="color:#425bf0; margin-right: 5px"></i>  26/05/2023 - 15/08/2023</p>
                  <p><i class="fa-solid fa-location-dot" style="color:#ff7f26; margin-right: 5px"></i>  Shophouse 17-09 Vinhomes Gardenia, Quận Nam Từ Liêm, Hà Nội </p>
                  <vs-button class="mt-2 w-full" color="warning">XEM CHI TIẾT KHÓA HỌC</vs-button>
                </div>
              </div>
              <div class="vx-col md:w-1/3 w-full mb-3" >
                <div>
                  <img src="@assets/images/customs/thumb_course_2.png" alt="Logo" width="100%">
                  <h4 class="mt-3 mb-2">SM6-C2302HF</h4>
                  <p><i class="fa-solid fa-calendar" style="color:#425bf0; margin-right: 5px"></i>  14/11/2023 - 06/02/2024</p>
                  <p><i class="fa-solid fa-location-dot" style="color:#ff7f26; margin-right: 5px"></i>  Shophouse 17-09 Vinhomes Gardenia, Quận Nam Từ Liêm, Hà Nội </p>
                  <vs-button class="mt-2 w-full" color="warning">XEM CHI TIẾT KHÓA HỌC</vs-button>
                </div>
              </div>
            </div>
          </div>
        </vs-tab>
      </vs-tabs>
    </vx-card>
    <div class="vx-row mt-5">
      <div class="vx-col lg:w-1/2 w-full text-left" id="simple-calendar-app">
        <vx-card slot="no-body" >
          <h4><i class="fa-solid fa-calendar-days text-warning"></i> Lịch học của tôi</h4>
          <calendar-view
            ref="calendar"
            :show-date="showDate"
            :events="simpleCalendarEvents"
            enableDragDrop
            eventTop="34px"
            eventBorderHeight="0px"
            eventContentHeight="1.65rem"
            class="theme-default mt-4" v-if="calendarView == 'month'">
          </calendar-view>
        </vx-card>
      </div>
      <div class="vx-col lg:w-1/2 w-full text-left">
        <vx-card slot="no-body" >
          <h4><i class="fa-solid fa-calendar-days text-warning"></i> Tin tức & sự kiện</h4>
          <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
            Từ ngày 27/05 đến hết ngày 30/06/2024, nền tảng Fahasa.com - Nhà sách trực tuyến hàng đầu Việt Nam tung voucher ưu đãi cực hời dành cho Khách hàng CNGD trên toàn quốc.
          </vs-alert>
          <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
            Ở mọi độ tuổi, con trẻ sẽ có những ước mơ, khát vọng của riêng mình, nó có thể đổi thay theo thời gian khôn lớn, điều này có thể lạ lẫm với ba mẹ nhưng đó chính là nền tảng giúp tạo nên thành tựu mai này cho con. Vì vậy, sự đồng hành của ba mẹ và trường học là vô cùng quan trọng trên hành trình nuôi dưỡng những khát vọng đó
          </vs-alert>
          <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
           Nhằm đáp ứng nhu cầu học và ôn luyện tiếp Anh thuận lợi hơn cũng như nâng cao trải nghiệm học tập cho phụ huynh và học viên, hệ thống Anh văn Hội Việt Mỹ CNGD độc quyền phát triển bộ đôi ứng dụng OVI Parents và OVI Kids dành cho học viên – phụ huynh.
          </vs-alert>
          <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
            LƯƠNG BẢO HÂN Ơi, Bạn có lịch thi Quiz 1 vào lúc 17:30 ngày 29/03/2024 tại phòng học HF2.1. Hãy ôn bài thật chu đáo và chuẩn bị một tinh thần vững vàng để tự tin đạt điểm tối đa nhé!
          </vs-alert>
          <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
            CNGD thông báo lớp SKE1n-C2403HF của LƯƠNG BẢO HÂN sẽ khai giảng vào lúc 17:30 ngày 20/02/2024 tại phòng học HF 2.2. Mến chúc học viên học tốt! Thông tin liên hệ: 02473056979
          </vs-alert>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
require('vue-simple-calendar/static/css/default.css')
export default {
  components: {
    VueApexCharts,
    CalendarView,
    CalendarViewHeader,
  },
  data () {
    return {
      apexChatData:{
        donutChart: {
          series: [55, 45],
          chartOptions: {
            colors: ['#7367F0', '#ccc'],
            legend: {
              show: false,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }
            ]
          }
        },
        donutChart1: {
          series: [65, 35],
          chartOptions: {
            colors: ['#FF9F43', '#ccc'],
            legend: {
              show: false,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }
            ]
          }
        },
        donutChart2: {
          series: [60, 40],
          chartOptions: {
            colors: ['#28C76F', '#ccc'],
            legend: {
              show: false,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }
            ]
          }
        }
      },
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendarViewTypes: [
        {
          label: 'Month',
          val: 'month'
        },
        {
          label: 'List',
          val: 'list'
        },
      ],

      events: [
        {
          id: 1,
          title: 'Buổi 1',
          startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 6),
          endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 6),
          url: '',
          classes: 'event-success',
          label: 'business'
        },
        {
          id: 2,
          title: 'Buổi 2',
          startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
          endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
          url: '',
          classes: 'event-success',
          label: 'business'
        },
        {
          id: 3,
          title: 'Buổi 3',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 4,
          title: 'Buổi 4',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 6),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 6),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 5,
          title: 'Buổi 5',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 6,
          title: 'Buổi 6',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 13),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 13),
          url: '',
          classes: 'event-warning',
          label: 'work'
        }
      ],
      labels: [
        {
          text: 'Business',
          value : 'business',
          color: 'success'
        },
        {
          text: 'Work',
          value: 'work',
          color: 'warning'
        },
        {
          text: 'Personal',
          value: 'personal',
          color: 'danger'
        }
      ]
      
    }
  },
  created () {
  },
  computed: {
    simpleCalendarEvents () {
      return this.events
    },
    calendarLabels () {
      return this.labels
    },
  },
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
<style lang="scss">
@import "@sass/vuexy/apps/simple-calendar.scss";
</style>
<style>
.theme-default .cv-weeks .cv-week {
  min-height: 60px !important;
}
[dir] #simple-calendar-app .theme-default.cv-wrapper{
  padding: 0px;
}
</style>