<template>
  <div id="simple-calendar-app">
    <div class="vx-card no-scroll-content">
      <calendar-view
        ref="calendar"
        :show-date="showDate"
        :events="simpleCalendarEvents"
        enableDragDrop
        eventTop="34px"
        eventBorderHeight="0px"
        eventContentHeight="1.65rem"
        class="theme-default" v-if="calendarView == 'month'">

        <div slot="header" class="mb-4">

          <div class="vx-row">

            <!-- Current Month -->
            <div class="vx-col sm:w-1/2 sm:my-0 my-3 text-left">
              <div class="flex items-center">
                <feather-icon
                  :icon="$vs.rtl ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
                  @click="updateMonth(-1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />

                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ showDate | month }}</span>

                <feather-icon
                  :icon="$vs.rtl ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
                  @click="updateMonth(1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />
              </div>
            </div>

            <div class="vx-col sm:w-1/2 text-right">
              <template v-for="(view, index) in calendarViewTypes">
                <vs-button
                  v-if="calendarView === view.val"
                  :key="String(view.val) + 'filled'"
                  type="filled"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
                <vs-button
                  v-else
                  :key="String(view.val) + 'border'"
                  type="border"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
              </template>

            </div>
          </div>
        </div>
      </calendar-view>
      <div v-if="calendarView == 'list'" class="p-6">
        <div class="vx-row">

            <!-- Current Month -->
            <div class="vx-col sm:w-1/2 sm:my-0 my-3 text-left">
              <div class="flex items-center">
                <feather-icon
                  :icon="$vs.rtl ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
                  @click="updateMonth(-1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />

                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ showDate | month }}</span>

                <feather-icon
                  :icon="$vs.rtl ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
                  @click="updateMonth(1)"
                  svgClasses="w-5 h-5 m-1"
                  class="cursor-pointer bg-primary text-white rounded-full" />
              </div>
            </div>

            <div class="vx-col sm:w-1/2 text-right">
              <template v-for="(view, index) in calendarViewTypes">
                <vs-button
                  v-if="calendarView === view.val"
                  :key="String(view.val) + 'filled'"
                  type="filled"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
                <vs-button
                  v-else
                  :key="String(view.val) + 'border'"
                  type="border"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
              </template>

            </div>
            <div class="vx-col w-full mt-5">
              <div class="vs-component vs-con-table vs-table-primary">
                <div class="con-tablex vs-table--content">
                    <div class="vs-con-tbody vs-table--tbody ">
                        <table class="vs-table vs-table--tbody-table">
                            <thead class="vs-table--thead">
                                <tr>
                                    <!---->
                                    <th colspan="1" rowspan="1" class="text-center">Ngày</th>
                                    <th colspan="1" rowspan="1" class="text-center">Buổi học</th>
                                    <th colspan="1" rowspan="1" class="text-center">Trạng thái</th>
                                </tr>
                            </thead>
                            <tr :class="item.id >2 ? 'tr-values vs-table--tr tr-table-state-null' : 'tr-values vs-table--tr tr-table-state-success'" v-for="(item, index) in simpleCalendarEvents">
                                <td class="td vs-table--td text-center">{{item.startDate | formatDateView}}</td>
                                <td class="td vs-table--td text-center">{{item.title}}</td>
                                <td class="td vs-table--td text-center">{{ item.id> 2 ? 'Sắp học' : 'Đã học'}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        
    </div>

  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
require('vue-simple-calendar/static/css/default.css')

import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'

export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker
  },
  data () {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',

      langHe: he,
      langEn: en,

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
          title: 'SKE1n - buổi 1',
          startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 6),
          endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 6),
          url: '',
          classes: 'event-success',
          label: 'business'
        },
        {
          id: 2,
          title: 'SKE1n - buổi 2',
          startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
          endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
          url: '',
          classes: 'event-success',
          label: 'business'
        },
        {
          id: 3,
          title: 'SKE1n - buổi 3',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 4,
          title: 'SKE1n - buổi 4',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 6),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 6),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 5,
          title: 'SKE1n - buổi 5',
          startDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
          endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
          url: '',
          classes: 'event-warning',
          label: 'work'
        },
        {
          id: 6,
          title: 'SKE1n - buổi 6',
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
  computed: {
    simpleCalendarEvents () {
      return this.events
    },
    validForm () {
      return this.title !== '' && this.startDate !== '' && this.endDate !== '' && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 && !this.errors.has('event-url')
    },
    disabledDatesTo () {
      return { to: new Date(this.startDate) }
    },
    disabledDatesFrom () {
      return { from: new Date(this.endDate) }
    },
    calendarLabels () {
      return this.labels
    },
    labelColor () {
      return (label) => {
        if      (label === 'business') return 'success'
        else if (label === 'work')     return 'warning'
        else if (label === 'personal') return 'danger'
        else if (label === 'none')     return 'primary'
      }
    },
    windowWidth () {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    addEvent () {
      const obj = { title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = `event-${  this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/addEvent', obj)
    },
    updateMonth (val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
    },
    clearFields () {
      this.title = this.endDate = this.url = ''
      this.id = 0
      this.labelLocal = 'none'
    },
    promptAddNewEvent (date) {
      this.disabledFrom = false
      this.addNewEventDialog(date)
    },
    addNewEventDialog (date) {
      this.clearFields()
      this.startDate = date
      this.endDate = date
      this.activePromptAddEvent = true
    },
    openAddNewEvent (date) {
      this.disabledFrom = true
      this.addNewEventDialog(date)
    },
    openEditEvent (event) {
      const e = this.$store.getters['calendar/getEvent'](event.id)
      this.id = e.id
      this.title = e.title
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.url = e.url
      this.labelLocal = e.label
      this.activePromptEditEvent = true
    },
    editEvent () {
      const obj = { id: this.id, title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = `event-${  this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/editEvent', obj)
    },
    removeEvent () {
      this.$store.dispatch('calendar/removeEvent', this.id)
    },
    eventDragged (event, date) {
      this.$store.dispatch('calendar/eventDragged', {event, date})
    }
  },
  created () {
  },
  beforeDestroy () {
    this.$store.unregisterModule('calendar')
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/apps/simple-calendar.scss";
</style>
<style>
.theme-default .cv-weeks .cv-week {
  min-height: 60px !important;
}
</style>