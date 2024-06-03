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
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    VueApexCharts
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
      }
      
    }
  },
  created () {
  }
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
