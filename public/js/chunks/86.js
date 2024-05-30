(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
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
        products: {
          item: '',
          list: []
        },
        tuition_fee: {
          item: '',
          list: []
        },
        discount_codes: {
          item: '',
          list: []
        }
      },
      contract: {
        branch_id: '',
        student_id: '',
        product_id: '',
        type: '',
        tuition_fee_id: '',
        tuition_fee_amount: '',
        tuition_fee_receivable: '',
        tuition_fee_session: '',
        discount_code_id: '',
        discount_code: '',
        discount_code_amount: '',
        discount_code_percent: '',
        coupon_code_check: 0,
        coupon_code: '',
        coupon_amount: '',
        coupon_session: '',
        total_amount: '',
        total_session: '',
        start_date: '',
        note: ''
      },
      student_info: {},
      alert: {
        active: false,
        body: '',
        color: ''
      }
    };
  },
  created: function created() {
    var _this2 = this;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/branches-has-user").then(function (response) {
      _this2.html.branches.list = response.data;
    });
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/products").then(function (response) {
      _this2.html.products.list = response.data;
    });
  },
  methods: {
    searchSuggestStudent: function searchSuggestStudent(keyword) {
      var _this3 = this;
      if (keyword && keyword.length >= 3 && this.calling === false) {
        this.calling = true;
        return new Promise(function (resolve, reject) {
          _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/students/search-contract", {
            branch_id: _this3.contract.branch_id,
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
      this.contract.student_id = student.student_id;
    },
    saveBranch: function saveBranch() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var branch_id = data.id;
        this.contract.branch_id = branch_id;
      } else {
        this.contract.branch_id = "";
      }
      this.student_info = {};
      this.contract.student_id = "";
    },
    saveProduct: function saveProduct() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var product_id = data.id;
        this.contract.product_id = product_id;
        this.loadTuitionFee();
      } else {
        this.contract.product_id = "";
        this.html.tuition_fee.list = [];
      }
      this.resetTuitionFee();
      this.html.tuition_fee.item = '';
    },
    resetTuitionFee: function resetTuitionFee() {
      this.contract.tuition_fee_id = '';
      this.contract.tuition_fee_amount = '';
      this.contract.tuition_fee_receivable = '';
      this.contract.session = '';
    },
    saveTuitionFee: function saveTuitionFee() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var tuition_fee_id = data.id;
        this.contract.tuition_fee_id = tuition_fee_id;
        this.contract.tuition_fee_amount = data.price;
        this.contract.tuition_fee_receivable = data.receivable;
        this.contract.tuition_fee_session = data.session;
        this.loadDiscountCode();
        this.caculatorSession();
      } else {
        this.contract.tuition_fee_id = "";
      }
    },
    loadTuitionFee: function loadTuitionFee() {
      var _this4 = this;
      if (this.contract.product_id) {
        this.$vs.loading();
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/contracts/load-tuition-fee", {
          branch_id: this.contract.branch_id,
          product_id: this.contract.product_id,
          type_contract: this.contract.type
        }).then(function (response) {
          _this4.$vs.loading.close();
          _this4.html.tuition_fee.list = response.data;
        })["catch"](function (e) {
          return console.log(e);
        });
      }
    },
    loadDiscountCode: function loadDiscountCode() {
      var _this5 = this;
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/contracts/load-discount-code", {
        tuition_fee_id: this.contract.tuition_fee_id
      }).then(function (response) {
        _this5.$vs.loading.close();
        _this5.html.discount_codes.list = response.data;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    saveDiscountCode: function saveDiscountCode() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var discount_code_id = data.id;
        this.contract.discount_code_id = discount_code_id;
        this.contract.discount_code = data.code;
        this.contract.discount_code_percent = data.percent;
        this.contract.discount_code_amount = data.discount;
        this.caculatorSession();
      } else {
        this.contract.discount_code_id = "";
        this.contract.discount_code_percent = "";
        this.contract.discount_code = "";
        this.contract.discount_code_amount = "";
      }
    },
    checkCoupon: function checkCoupon() {
      var _this6 = this;
      if (this.contract.coupon_code) {
        this.$vs.loading.close();
        this.contract.coupon_code_check = 0;
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/contracts/check-coupon", {
          coupon_code: this.contract.coupon_code
        }).then(function (response) {
          _this6.$vs.loading.close();
          if (response.data.status == 0) {
            _this6.$vs.notify({
              title: 'Lỗi',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'warning'
            });
            _this6.contract.coupon_amount = 0;
            _this6.contract.coupon_session = 0;
            _this6.caculatorSession();
          } else {
            _this6.contract.coupon_code_check = 1;
            _this6.contract.coupon_amount = response.data.data.coupon_amount;
            _this6.contract.coupon_session = response.data.data.coupon_session;
            _this6.caculatorSession();
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      } else {
        this.contract.coupon_amount = 0;
        this.contract.coupon_session = 0;
        this.caculatorSession();
      }
    },
    selectDate: function selectDate(date) {
      if (date) {
        this.contract.start_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
      }
    },
    caculatorSession: function caculatorSession() {
      this.contract.total_amount = this.contract.tuition_fee_amount - this.contract.discount_code_amount - this.contract.coupon_amount > 0 ? this.contract.tuition_fee_amount - this.contract.discount_code_amount - this.contract.coupon_amount : 0;
      this.contract.total_session = this.contract.tuition_fee_session + this.contract.coupon_session;
    },
    save: function save() {
      var _this7 = this;
      var mess = "";
      var resp = true;
      if (this.contract.branch_id == "") {
        mess += " - Trung tâm không được để trống<br/>";
        resp = false;
      }
      if (this.contract.student_id == "") {
        mess += " - Học sinh không được để trống<br/>";
        resp = false;
      }
      if (this.contract.type == "") {
        mess += " - Loại hợp đồng không được để trống<br/>";
        resp = false;
      }
      if (this.contract.product_id == "") {
        mess += " - Khóa học không được để trống<br/>";
        resp = false;
      }
      if (this.contract.tuition_fee_id == "") {
        mess += " - Gói học phí không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/contracts/add", this.contract).then(function (response) {
        _this7.$vs.loading.close();
        _this7.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
        _this7.$router.push('/lms/contracts');
      })["catch"](function (e) {
        console.log(e);
        _this7.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  })], 1), _vm._v(" "), _vm.contract.branch_id ? _c("div", {
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
  }, [_c("label", [_vm._v("Phụ huynh")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.gud_name1,
      expression: "student_info.gud_name1"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.gud_name1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "gud_name1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số điện thoại")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.gud_mobile1,
      expression: "student_info.gud_mobile1"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.gud_mobile1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "gud_mobile1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.gud_email1,
      expression: "student_info.gud_email1"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.gud_email1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "gud_email1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Địa chỉ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.address,
      expression: "student_info.address"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "address", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Trung tâm")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.student_branch_name,
      expression: "student_info.student_branch_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.student_branch_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "student_branch_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("EC")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.ec_name,
      expression: "student_info.ec_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.ec_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "ec_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("EC Leader")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.ec_leader_name,
      expression: "student_info.ec_leader_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.ec_leader_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "ec_leader_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Giám đốc trung tâm")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student_info.ceo_branch_name,
      expression: "student_info.ceo_branch_name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.student_info.ceo_branch_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student_info, "ceo_branch_name", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("h5", {
    staticClass: "w-full mb-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-file-contract mr-1"
  }), _vm._v(" Thông tin đăng ký học")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Loại hợp đồng "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.type,
      expression: "contract.type"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.contract, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.loadTuitionFee();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Chọn loại hợp đồng")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Học thử")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Chính thức")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Khóa học")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn khóa học",
      options: _vm.html.products.list,
      searchable: true,
      language: "tv-VN",
      disabled: !(_vm.contract.student_id && _vm.contract.type !== "")
    },
    on: {
      input: _vm.saveProduct
    },
    model: {
      value: _vm.html.products.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.products, "item", $$v);
      },
      expression: "html.products.item"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Gói học phí")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn gói học phí",
      options: _vm.html.tuition_fee.list,
      searchable: true,
      language: "tv-VN",
      disabled: !_vm.contract.product_id
    },
    on: {
      input: _vm.saveTuitionFee
    },
    model: {
      value: _vm.html.tuition_fee.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.tuition_fee, "item", $$v);
      },
      expression: "html.tuition_fee.item"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Giá gốc")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm._f("formatNumber")(_vm.contract.tuition_fee_amount)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi chính thức")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.tuition_fee_session,
      expression: "contract.tuition_fee_session"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.contract.tuition_fee_session
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "tuition_fee_session", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Mã chiết khấu")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn gói học phí",
      options: _vm.html.discount_codes.list,
      searchable: true,
      language: "tv-VN"
    },
    on: {
      input: _vm.saveDiscountCode
    },
    model: {
      value: _vm.html.discount_codes.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.discount_codes, "item", $$v);
      },
      expression: "html.discount_codes.item"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Phần trăm chiết khấu(%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.discount_code_percent,
      expression: "contract.discount_code_percent"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.contract.discount_code_percent
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "discount_code_percent", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số tiền giảm trừ theo mã chiết khấu")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm._f("formatNumber")(_vm.contract.discount_code_amount)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Mã voucher")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.coupon_code,
      expression: "contract.coupon_code"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title"
    },
    domProps: {
      value: _vm.contract.coupon_code
    },
    on: {
      change: _vm.checkCoupon,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "coupon_code", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số tiền voucher")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm._f("formatNumber")(_vm.contract.coupon_amount)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số buổi học bổng")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.coupon_session,
      expression: "contract.coupon_session"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.contract.coupon_session
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "coupon_session", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Số tiền phải đóng")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm._f("formatNumber")(_vm.contract.total_amount)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Tổng số buổi học")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.total_session,
      expression: "contract.total_session"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: "true"
    },
    domProps: {
      value: _vm.contract.total_session
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "total_session", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày dự kiến học")]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày dự kiến học",
      lang: _vm.datepickerOptions.lang
    },
    on: {
      change: _vm.selectDate
    },
    model: {
      value: _vm.contract.start_date,
      callback: function callback($$v) {
        _vm.$set(_vm.contract, "start_date", $$v);
      },
      expression: "contract.start_date"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contract.note,
      expression: "contract.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    domProps: {
      value: _vm.contract.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contract, "note", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _c("vs-alert", {
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
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5"
  }, [_c("div", {
    staticClass: "vx-col w-full text-right"
  }, [_c("router-link", {
    staticClass: "btn btn-danger",
    attrs: {
      to: "/lms/contracts"
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
  }, [_vm._v("Thêm mới")])], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/lms/contracts/add.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/lms/contracts/add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=00645a5c */ "./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/lms/contracts/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/contracts/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=00645a5c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/contracts/add.vue?vue&type=template&id=00645a5c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_00645a5c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);