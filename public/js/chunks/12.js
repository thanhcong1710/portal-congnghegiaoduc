(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/js/src/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/utils/color.js */ "./resources/assets/utils/color.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {
      // type: Array,
      // required: true
    },
    color: {
      type: String,
      "default": 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      "default": 'line'
    },
    iconRight: {
      type: Boolean,
      "default": false
    },
    hideChart: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(',');
        return "#".concat(((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1));
      }
      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        'primary': '#A9A2F6',
        'success': '#55DD92',
        'warning': '#ffc085',
        'danger': '#F97794'
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors['primary'];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type === 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type === 'line') {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _http_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/axios.js */ "./resources/js/src/http/axios.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      subscribersGained: {
        series: [{
          name: 'Học sinh',
          data: [3328, 4320, 5361, 4980, 5690, 5789, 6489]
        }],
        analyticsData: {
          subscribers: 6489
        }
      },
      revenueGenerated: {
        series: [{
          name: 'Học sinh',
          data: [350, 275, 400, 300, 350, 300, 307]
        }],
        analyticsData: {
          revenue: 307
        }
      },
      quarterlySales: {
        series: [{
          name: 'Học sinh',
          data: [10.4, 7.5, 9, 8, 11, 10.6]
        }],
        analyticsData: {
          sales: '10.6'
        }
      },
      ordersRecevied: {
        series: [{
          name: 'Tỷ lệ(%)',
          data: [30, 45, 50, 55, 67, 58, 59]
        }],
        analyticsData: {
          orders: '59%'
        }
      },
      pieChart: {
        series: [440, 550, 130, 430],
        chartOptions: {
          labels: ['Khóa học A', 'Khóa học B', 'Khóa học C', 'Khóa học D'],
          colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      },
      columnChart: {
        series: [{
          name: 'Lãi/Lỗ',
          data: [560, 610, 580, 630, 600, 660]
        }, {
          name: 'Doanh thu',
          data: [980, 870, 1050, 910, 1140, 940]
        }, {
          name: 'Chi phí',
          data: [420, 260, 470, 280, 540, 220]
        }],
        chartOptions: {
          colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '55%'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['T12/2023', 'T1/2024', 'T2/2024', 'T3/2024', 'T4/2024', 'T5/2024']
          },
          yaxis: {
            title: {
              text: 'VND (triệu)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function formatter(val) {
                return val + " triệu đồng";
              }
            }
          }
        }
      }
    };
  },
  created: function created() {
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/dashboard").then(function (response) {
      console.log(response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("vx-card", {
    staticClass: "overflow-hidden"
  }, [_c("div", {
    attrs: {
      slot: "no-body"
    },
    slot: "no-body"
  }, [_c("div", {
    staticClass: "p-6",
    "class": {
      "flex justify-between flex-row-reverse items-center": _vm.iconRight,
      "text-center": !_vm.iconRight && _vm.hideChart,
      "pb-0": !_vm.hideChart
    }
  }, [_c("feather-icon", {
    staticClass: "p-3 inline-flex rounded-full",
    "class": ["text-".concat(_vm.color), {
      "mb-4": !_vm.iconRight
    }],
    style: {
      background: "rgba(var(--vs-".concat(_vm.color, "),.15)")
    },
    attrs: {
      icon: _vm.icon
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "truncate"
  }, [_c("h2", {
    staticClass: "mb-1 font-bold"
  }, [_vm._v(_vm._s(_vm.statistic))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])])], 1), _vm._v(" "), !_vm.hideChart ? _c("div", {
    staticClass: "line-area-chart"
  }, [_c("vue-apex-charts", {
    ref: "apexChart",
    attrs: {
      type: _vm.type,
      height: "100",
      width: "100%",
      options: _vm.chartOptions,
      series: _vm.chartData
    }
  })], 1) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "dashboard-analytics"
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
  }, [_vm.subscribersGained.analyticsData ? _c("statistics-card-line", {
    attrs: {
      icon: "UsersIcon",
      statistic: _vm._f("k_formatter")(_vm.subscribersGained.analyticsData.subscribers),
      statisticTitle: "Tổng số học sinh hiện tại",
      chartData: _vm.subscribersGained.series,
      type: "area"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
  }, [_vm.revenueGenerated.analyticsData ? _c("statistics-card-line", {
    attrs: {
      icon: "UserPlusIcon",
      statistic: _vm._f("k_formatter")(_vm.revenueGenerated.analyticsData.revenue),
      statisticTitle: "Số học sinh tuyển mới tháng",
      chartData: _vm.revenueGenerated.series,
      color: "success",
      type: "area"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
  }, [_vm.quarterlySales.analyticsData ? _c("statistics-card-line", {
    attrs: {
      icon: "HomeIcon",
      statistic: _vm.quarterlySales.analyticsData.sales,
      statisticTitle: "Số học sinh trung bình trên lớp",
      chartData: _vm.quarterlySales.series,
      color: "danger",
      type: "area"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
  }, [_vm.ordersRecevied.analyticsData ? _c("statistics-card-line", {
    attrs: {
      icon: "DivideIcon",
      statistic: _vm._f("k_formatter")(_vm.ordersRecevied.analyticsData.orders),
      statisticTitle: "Tỷ lệ lấp đầy lớp",
      chartData: _vm.ordersRecevied.series,
      color: "warning",
      type: "area"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-1/3 mb-base"
  }, [_c("vx-card", {
    staticClass: "text"
  }, [_c("h5", {
    staticClass: "mb-4"
  }, [_vm._v("Cơ cấu khóa học")]), _vm._v(" "), _c("vue-apex-charts", {
    attrs: {
      type: "pie",
      height: "350",
      options: _vm.pieChart.chartOptions,
      series: _vm.pieChart.series
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full md:w-2/3 mb-base"
  }, [_c("vx-card", [_c("h5", [_vm._v("Kết quả kinh doanh")]), _vm._v(" "), _c("vue-apex-charts", {
    attrs: {
      type: "bar",
      height: "350",
      options: _vm.columnChart.chartOptions,
      series: _vm.columnChart.series
    }
  })], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard-analytics .greet-user {\n  position: relative;\n}\n#dashboard-analytics .greet-user .decore-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#dashboard-analytics .greet-user .decore-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 576px) {\n#dashboard-analytics .decore-left, #dashboard-analytics .decore-right {\n    width: 140px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/chartConfigs.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/chartConfigs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=template&id=596e52fc */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc");
/* harmony import */ var _DashboardAnalytics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=script&lang=js */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardAnalytics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&id=596e52fc&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_id_596e52fc_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=template&id=596e52fc */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);