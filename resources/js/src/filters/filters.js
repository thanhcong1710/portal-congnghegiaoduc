import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  const arr = value.split(' ')
  const capitalized_array = []
  arr.forEach((word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalized_array.push(capitalized)
  })
  return capitalized_array.join(' ')
})

Vue.filter('title', function (value, replacer = '_') {
  if (!value) return ''
  value = value.toString()

  const arr = value.split(replacer)
  const capitalized_array = []
  arr.forEach((word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalized_array.push(capitalized)
  })
  return capitalized_array.join(' ')
})

Vue.filter('truncate', function (value, limit) {
  return value.substring(0, limit)
})

Vue.filter('tailing', function (value, tail) {
  return value + tail
})

Vue.filter('time', function (value, is24HrFormat = false) {
  if (value) {
    const date = new Date(Date.parse(value))
    let hours = date.getHours()
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    if (!is24HrFormat) {
      const time = hours > 12 ? 'AM' : 'PM'
      hours = hours % 12 || 12
      return `${hours}:${min} ${time}`
    }
    return `${hours}:${min}`
  }
})

Vue.filter('date', function (value, fullDate = false) {
  value = String(value)
  const date = value.slice(8, 10).trim()
  const month = value.slice(4, 7).trim()
  const year = value.slice(11, 15)

  if (!fullDate) return `${date} ${month}`
  else return `${date} ${month} ${year}`
})

Vue.filter('month', function (val, showYear = true) {
  val = String(val)

  const regx = /\w+\s(\w+)\s\d+\s(\d+)./
  if (!showYear) {
    return regx.exec(val)[1]
  } else {
    return `${regx.exec(val)[1]} ${regx.exec(val)[2]}`
  }

})

Vue.filter('csv', function (value) {
  return value.join(', ')
})

Vue.filter('filter_tags', function (value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '')
})

Vue.filter('k_formatter', function (num) {
  return num > 999 ? `${(num / 1000).toFixed(1)}k` : num
})

Vue.filter('formatCurrency', (v, c = 'đ') => {
  let resp     = ''
  let number   = 0
  let currency = c
  if (parseFloat(v) < 100) {
    number   = parseFloat(v)
    currency = '%'
    resp     = `${number}${currency}`
  } else {
    number = parseInt(v)
    resp   = number > 0 ? `${number.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').slice(0, -2)}${currency}` : 0
  }
  return resp
})

Vue.filter('getStatusColor', function (status) {
  if (status == 1) return 'success'
  return ''
})

Vue.filter('getStatusText', function (status) {
  if (status == 1) return 'Kích hoạt'
  return 'Không kích hoạt'
})

Vue.filter('formatNumber', (v) => !isNaN(v) && v > 0 ? parseInt(v).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').slice(0, -2) : 0)
Vue.filter('formatMoney', (v, c = 'đ') => !isNaN(v) && v > 0 && c !== '' ? `${parseInt(v).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').slice(0, -2)}${c}` : `0${c}`)
Vue.filter('formatDateView', (v) => moment(v).format('DD/MM/YYYY'))