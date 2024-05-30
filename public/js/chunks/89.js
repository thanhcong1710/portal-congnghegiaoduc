(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/axios.js */ "./resources/js/src/http/axios.js");
/* harmony import */ var _until_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../until/helper.js */ "./resources/js/src/until/helper.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_StudentSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/StudentSearch */ "./resources/js/src/components/StudentSearch.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    datepicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a,
    "vue-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    search: _components_StudentSearch__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    var _this = this;
    return {
      datepickerOptions: {
        closed: true,
        value: "",
        minDate: "",
        lang: {
          days: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
        }
      },
      calling: false,
      filter: {
        search: {
          link: 0,
          display: 'hidden',
          find: function find(keyword) {
            return _this.searchSuggestStudent(keyword);
          },
          action: function action(student) {
            return _this.selectStudent(student);
          }
        }
      },
      html: {
        branches: {
          item: '',
          list: []
        }
      },
      reserve: {
        branch_id: '',
        student_id: '',
        contract_id: '',
        note: '',
        start_date: '',
        end_date: '',
        session: '',
        is_reserved: 1
      },
      student_info: {},
      alert: {
        active: false,
        body: '',
        color: ''
      },
      input_disabled: true,
      temp: {
        min_date: new Date(),
        max_date: new Date()
      }
    };
  },
  created: function created() {
    var _this2 = this;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/branches-has-user").then(function (response) {
      _this2.html.branches.list = response.data;
    });
  },
  methods: {
    searchSuggestStudent: function searchSuggestStudent(keyword) {
      var _this3 = this;
      if (keyword && keyword.length >= 3 && this.calling === false) {
        this.calling = true;
        return new Promise(function (resolve, reject) {
          _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/reserves/search-student", {
            branch_id: _this3.reserve.branch_id,
            keyword: keyword
          }).then(function (response) {
            var resp = response.data.length ? response.data : [{
              label: 'Không tìm thấy',
              branch_name: 'Không có kết quả nào phù hợp'
            }];
            _this3.calling = false;
            resolve(resp);
          })["catch"](function (e) {
            return console.log(e);
          });
        });
      }
    },
    selectStudent: function selectStudent(student) {
      this.student_info = student;
      this.reserve.student_id = student.student_id;
      this.reserve.contract_id = student.contract_id;
      if (!_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGreaterThan(_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].convertDateToString(this.temp.min_date), student.enrolment_start_date)) {
        this.temp.min_date = new Date(student.enrolment_start_date);
      }
      if (!_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].isGreaterThan(_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].convertDateToString(this.temp.max_date), student.enrolment_last_date)) {
        this.temp.max_date = new Date(student.enrolment_last_date);
      }
      this.input_disabled = false;
    },
    saveBranch: function saveBranch() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var branch_id = data.id;
        this.reserve.branch_id = branch_id;
      } else {
        this.reserve.branch_id = "";
      }
      this.student_info = {};
      this.reserve.student_id = "";
    },
    selectDate: function selectDate(date) {
      if (date) {
        this.reserve.start_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
        this.getEndDate();
      }
    },
    getEndDate: function getEndDate() {
      var _this4 = this;
      if (this.reserve.start_date && this.reserve.session) {
        this.$vs.loading();
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/system/get-enddate-in-class", {
          session: this.reserve.session,
          start_date: this.reserve.start_date,
          class_id: this.student_info.class_id
        }).then(function (response) {
          _this4.reserve.end_date = response.data;
          _this4.$vs.loading.close();
        })["catch"](function (e) {
          console.log(e);
          _this4.$vs.loading.close();
        });
      } else {
        this.reserve.end_date = '';
      }
    },
    save: function save() {
      var _this5 = this;
      var mess = "";
      var resp = true;
      if (this.reserve.branch_id == "") {
        mess += " - Trung tâm không được để trống<br/>";
        resp = false;
      }
      if (this.reserve.contract_id == "") {
        mess += " - Học sinh không được để trống<br/>";
        resp = false;
      }
      if (this.reserve.session == "") {
        mess += " - Số buổi bảo lưu không được để trống<br/>";
        resp = false;
      }
      if (this.reserve.start_date == "") {
        mess += " - Ngày bắt đầu bảo lưu không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/reserves/add", {
        reserve: this.reserve,
        student_info: this.student_info
      }).then(function (response) {
        _this5.$vs.loading.close();
        if (response.data.status == 1) {
          _this5.$vs.notify({
            title: 'Thành Công',
            text: response.data.message,
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          });
          _this5.$router.push('/lms/reserves');
        } else {
          _this5.$vs.notify({
            title: 'Lỗi',
            text: response.data.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          });
        }
      })["catch"](function (e) {
        console.log(e);
        _this5.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      id: "page-users-list"
    }
  }, [_c("vx-card", {
    staticClass: "mt-5",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-first"
  }, [_c("h5", {
    staticClass: "w-full mb-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-user-graduate mr-1"
  }), _vm._v(" Thông tin học sinh")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Chọn trung tâm "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn trung tâm để giới hạn phạm vi tìm kiếm",
      options: _vm.html.branches.list,
      searchable: true,
      language: "tv-VN"
    },
    on: {
      input: _vm.saveBranch
    },
    model: {
      value: _vm.html.branches.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.branches, "item", $$v);
      },
      expression: "html.branches.item"
    }
  })], 1), _vm._v(" "), _vm.reserve.branch_id ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v(" Chọn học sinh "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("search", {
    attrs: {
      endpoint: _vm.filter.search.link,
      suggestStudents: _vm.filter.search.find,
      onSelectStudent: _vm.filter.search.action
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Họ tên")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.name,
      expression: "student_info.name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Mã LMS")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.lms_code,
      expression: "student_info.lms_code"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.lms_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "lms_code", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Khóa học")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.product_name,
      expression: "student_info.product_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.product_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "product_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Chương trình")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.program_name,
      expression: "student_info.program_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.program_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "program_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Lớp học")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.class_name,
      expression: "student_info.class_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.class_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "class_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Gói phí")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.tuition_fee_name,
      expression: "student_info.tuition_fee_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.tuition_fee_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "tuition_fee_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số phí đã đóng")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm._f("formatNumber")(_vm.student_info.total_charged)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Tổng số buổi học")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.summary_sessions,
      expression: "student_info.summary_sessions"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.summary_sessions
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "summary_sessions", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi học bổng")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.bonus_sessions,
      expression: "student_info.bonus_sessions"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.bonus_sessions
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "bonus_sessions", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi được phép bảo lưu")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.reservable_sessions,
      expression: "student_info.reservable_sessions"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.reservable_sessions
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "reservable_sessions", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi đã bảo lưu")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.reserved_sessions,
      expression: "student_info.reserved_sessions"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.reserved_sessions
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "reserved_sessions", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("h5", {
    staticClass: "w-full mb-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-file-contract mr-1"
  }), _vm._v(" Thông tin bảo lưu")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Loại bảo lưu "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reserve.is_reserved,
      expression: "reserve.is_reserved"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      disabled: _vm.input_disabled
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.reserve, "is_reserved", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Bảo lưu không giữ chỗ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Bảo lưu giữ chỗ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi bảo lưu "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reserve.session,
      expression: "reserve.session"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "number",
      name: "title",
      disabled: _vm.input_disabled
    },
    domProps: {
      value: _vm.reserve.session
    },
    on: {
      change: function change($event) {
        return _vm.getEndDate();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.reserve, "session", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày bắt đầu bảo lưu "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày bắt đầu",
      lang: _vm.datepickerOptions.lang,
      disabled: _vm.input_disabled,
      "not-before": _vm.temp.min_date,
      "not-after": _vm.temp.max_date
    },
    on: {
      change: _vm.selectDate
    },
    model: {
      value: _vm.reserve.start_date,
      callback: function callback($$v) {
        _vm.$set(_vm.reserve, "start_date", $$v);
      },
      expression: "reserve.start_date"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày kết thúc bảo lưu")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reserve.end_date,
      expression: "reserve.end_date"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.reserve.end_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.reserve, "end_date", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reserve.note,
      expression: "reserve.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    domProps: {
      value: _vm.reserve.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.reserve, "note", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5",
    attrs: {
      active: _vm.alert.active,
      color: _vm.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full text-right"
  }, [_c("router-link", {
    staticClass: "btn btn-danger",
    attrs: {
      to: "/lms/reserves"
    }
  }, [_c("vs-button", {
    staticClass: "mb-2 mr-3",
    attrs: {
      color: "dark",
      type: "border"
    }
  }, [_vm._v("Hủy")])], 1), _vm._v(" "), _c("vs-button", {
    staticClass: "mb-2",
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.save
    }
  }, [_vm._v("Thêm mới")])], 1)], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/lms/reserves/add.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/lms/reserves/add.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=591e43b0 */ "./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/lms/reserves/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/reserves/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0 ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=591e43b0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/reserves/add.vue?vue&type=template&id=591e43b0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_591e43b0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);