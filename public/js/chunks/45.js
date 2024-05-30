(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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
        },
        to_branchs: {
          item: '',
          list: []
        }
      },
      branch_transfer: {
        branch_id: '',
        student_id: '',
        to_branch_id: '',
        note: '',
        transfer_date: ''
      },
      student_info: {},
      from_contracts: [],
      to_contracts: [],
      alert: {
        active: false,
        body: '',
        color: ''
      },
      input_disabled: true,
      temp: {
        min_date: new Date()
      }
    };
  },
  created: function created() {
    var _this2 = this;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/branches-has-user").then(function (response) {
      _this2.html.branches.list = response.data;
      _this2.html.to_branchs.list = response.data;
    });
  },
  methods: {
    searchSuggestStudent: function searchSuggestStudent(keyword) {
      var _this3 = this;
      this.resetInputBranchTransfer();
      if (keyword && keyword.length >= 3 && this.calling === false) {
        this.calling = true;
        return new Promise(function (resolve, reject) {
          _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/branch_transfers/search-student", {
            branch_id: _this3.branch_transfer.branch_id,
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
      this.branch_transfer.student_id = student.student_id;
      this.input_disabled = false;
      this.getContractsActive(student.student_id);
    },
    getContractsActive: function getContractsActive(student_id) {
      var _this4 = this;
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/branch_transfers/get-data-from-contract", {
        student_id: student_id
      }).then(function (response) {
        _this4.from_contracts = response.data;
        _this4.$vs.loading.close();
      })["catch"](function (e) {
        console.log(e);
        _this4.$vs.loading.close();
      });
    },
    resetInputBranchTransfer: function resetInputBranchTransfer() {
      this.input_disabled = true;
      this.branch_transfer.student_id = '';
      this.branch_transfer.to_branch_id = '';
      this.branch_transfer.note = '';
      this.branch_transfer.transfer_date = '';
    },
    saveBranch: function saveBranch() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var branch_id = data.id;
        this.branch_transfer.branch_id = branch_id;
      } else {
        this.branch_transfer.branch_id = "";
      }
      this.student_info = {};
      this.resetInputBranchTransfer();
      this.branch_transfer.student_id = "";
    },
    saveToBranch: function saveToBranch() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var to_branch_id = data.id;
        this.branch_transfer.to_branch_id = to_branch_id;
      } else {
        this.branch_transfer.to_branch_id = "";
        this.html.classes.list = [];
      }
    },
    selectDate: function selectDate(date) {
      if (date) {
        this.branch_transfer.transfer_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
        this.getContractsActiveByTransferDate();
      }
    },
    getContractsActiveByTransferDate: function getContractsActiveByTransferDate() {
      var _this5 = this;
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/branch_transfers/get-data-to-contract", {
        from_contracts: this.from_contracts,
        transfer_date: this.branch_transfer.transfer_date
      }).then(function (response) {
        _this5.to_contracts = response.data;
        _this5.$vs.loading.close();
      })["catch"](function (e) {
        console.log(e);
        _this5.$vs.loading.close();
      });
    },
    save: function save() {
      var _this6 = this;
      var mess = "";
      var resp = true;
      if (this.branch_transfer.to_branch_id == "") {
        mess += " - Trung tâm nhận không được để trống<br/>";
        resp = false;
      }
      if (this.branch_transfer.to_branch_id != "" && this.branch_transfer.branch_id == this.branch_transfer.to_branch_id) {
        mess += " - Trung tâm nhận phải khác trung tâm hiện tại<br/>";
        resp = false;
      }
      if (this.branch_transfer.transfer_date == "") {
        mess += " - Ngày bắt đầu chuyển lớp không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/branch_transfers/add", {
        branch_transfer: this.branch_transfer,
        student_info: this.student_info,
        from_contracts: this.from_contracts,
        to_contracts: this.to_contracts
      }).then(function (response) {
        _this6.$vs.loading.close();
        if (response.data.status == 1) {
          _this6.$vs.notify({
            title: 'Thành Công',
            text: response.data.message,
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          });
          _this6.$router.push('/lms/branch_transfers');
        } else {
          _this6.$vs.notify({
            title: 'Lỗi',
            text: response.data.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          });
        }
      })["catch"](function (e) {
        console.log(e);
        _this6.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  })], 1), _vm._v(" "), _vm.branch_transfer.branch_id ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v(" Chọn học sinh "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("search", {
    attrs: {
      endpoint: _vm.filter.search.link,
      suggestStudents: _vm.filter.search.find,
      onSelectStudent: _vm.filter.search.action
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.branch_transfer.student_id ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Hồ sơ học sinh")]), _vm._v(" "), _c("div", {
    staticClass: "vs-component vs-con-table stripe vs-table-primary"
  }, [_c("div", {
    staticClass: "vs-con-tbody vs-table--tbody"
  }, [_c("table", {
    staticClass: "vs-table vs-table--tbody-table"
  }, [_c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td",
    attrs: {
      width: "124px"
    }
  }, [_c("span", [_vm._v("Họ tên:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.name))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("Mã LMS:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("strong", [_vm._v(_vm._s(_vm.student_info.lms_code))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("Phụ huynh:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.gud_name1))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("Điện thoại:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.gud_mobile1))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("Email:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.gud_email1))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("Điạ chỉ:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.address))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("EC:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.ec_name))])])]), _vm._v(" "), _c("tr", {
    staticClass: "tr-values vs-table--tr tr-table-state-null"
  }, [_c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v("CM:")])]), _vm._v(" "), _c("td", {
    staticClass: "td vs-table--td"
  }, [_c("span", [_vm._v(_vm._s(_vm.student_info.cm_name))])])])])])])])]) : _vm._e(), _vm._v(" "), _vm.branch_transfer.student_id && _vm.from_contracts.length > 0 ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Danh sách gói phí")]), _vm._v(" "), _vm._l(_vm.from_contracts, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vs-component vs-con-table stripe vs-table-primary mb-5"
    }, [_c("div", {
      staticClass: "vs-con-tbody vs-table--tbody"
    }, [_c("table", {
      staticClass: "vs-table vs-table--tbody-table"
    }, [_c("thead", {
      staticClass: "vs-table--thead"
    }, [_c("tr", [_c("th", {
      staticClass: "bg-primary",
      staticStyle: {
        color: "#fff"
      },
      attrs: {
        colspan: "2",
        rowspan: "1"
      }
    }, [_c("div", {
      staticClass: "vs-table-text"
    }, [_vm._v(_vm._s(index + 1) + ". Hợp đồng số " + _vm._s(item.code) + " (gói phí " + _vm._s(item.tuition_fee_name) + ")")])])])]), _vm._v(" "), _c("tbody", [_c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td",
      attrs: {
        width: "160px"
      }
    }, [_c("span", [_vm._v("Số phí đã đóng:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(_vm._f("formatMoney")(item.total_charged)))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi chính thức:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.real_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi học bổng:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.bonus_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi đã học:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("strong", [_vm._v(_vm._s(item.done_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi còn:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("strong", [_vm._v(_vm._s(item.left_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Khóa học:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.product_name))])])]), _vm._v(" "), item.class_id ? _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Lớp học:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.class_name))])])]) : _vm._e(), _vm._v(" "), item.class_id ? _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Thời gian:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(_vm._f("formatDateView")(item.enrolment_start_date)) + " - " + _vm._s(_vm._f("formatDateView")(item.enrolment_last_date)))])])]) : _vm._e()])])])]);
  })], 2) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("h5", {
    staticClass: "w-full mb-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-file-contract mr-1"
  }), _vm._v(" Thông tin chuyển trung tâm")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Chọn trung tâm nhận "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn trung tâm nhận",
      options: _vm.html.to_branchs.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.input_disabled
    },
    on: {
      input: _vm.saveToBranch
    },
    model: {
      value: _vm.html.to_branchs.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.to_branchs, "item", $$v);
      },
      expression: "html.to_branchs.item"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày bắt đầu chuyển "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày bắt đầu chuyển",
      lang: _vm.datepickerOptions.lang,
      disabled: _vm.input_disabled,
      "not-before": _vm.temp.min_date
    },
    on: {
      change: _vm.selectDate
    },
    model: {
      value: _vm.branch_transfer.transfer_date,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_transfer, "transfer_date", $$v);
      },
      expression: "branch_transfer.transfer_date"
    }
  })], 1), _vm._v(" "), _vm.branch_transfer.transfer_date && _vm.to_contracts.length > 0 ? _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Danh sách gói phí tại thời điểm chuyển")]), _vm._v(" "), _vm._l(_vm.to_contracts, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vs-component vs-con-table stripe vs-table-primary mb-5"
    }, [_c("div", {
      staticClass: "vs-con-tbody vs-table--tbody"
    }, [_c("table", {
      staticClass: "vs-table vs-table--tbody-table"
    }, [_c("thead", {
      staticClass: "vs-table--thead"
    }, [_c("tr", [_c("th", {
      staticClass: "bg-success",
      staticStyle: {
        color: "#fff"
      },
      attrs: {
        colspan: "2",
        rowspan: "1"
      }
    }, [_c("div", {
      staticClass: "vs-table-text"
    }, [_vm._v(_vm._s(index + 1) + ". Hợp đồng số " + _vm._s(item.code) + " (gói phí " + _vm._s(item.tuition_fee_name) + ")")])])])]), _vm._v(" "), _c("tbody", [_c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td",
      attrs: {
        width: "160px"
      }
    }, [_c("span", [_vm._v("Số phí đã đóng:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(_vm._f("formatMoney")(item.total_charged)))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi chính thức:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.real_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi học bổng:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.bonus_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi đã học:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("strong", [_vm._v(_vm._s(item.done_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Số buổi còn:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("strong", [_vm._v(_vm._s(item.left_sessions))])])]), _vm._v(" "), _c("tr", {
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v("Khóa học:")])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("span", [_vm._v(_vm._s(item.product_name))])])])])])])]);
  })], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.branch_transfer.note,
      expression: "branch_transfer.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    domProps: {
      value: _vm.branch_transfer.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.branch_transfer, "note", $event.target.value);
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
      to: "/lms/branch_transfers"
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .tr-values .vs-table--td{\n  padding: 4px 15px;\n}\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th{\n  padding: 4px 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=761dadf8&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/lms/branch_transfers/add.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/lms/branch_transfers/add.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=761dadf8 */ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&id=761dadf8&lang=css */ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/lms/branch_transfers/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=761dadf8&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=style&index=0&id=761dadf8&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_761dadf8_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8 ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=761dadf8 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/branch_transfers/add.vue?vue&type=template&id=761dadf8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_761dadf8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);