(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
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
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    datepicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a,
    "vue-select": vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
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
      alert: {
        active: false,
        body: '',
        color: ''
      },
      html: {
        products: {
          item: '',
          list: []
        },
        tuition_fees: {
          item: '',
          list: []
        }
      },
      branches: [],
      tuition_fees_relation: [],
      tuition_fee: {
        product_id: '',
        name: '',
        session: '',
        number_of_months: '',
        price: '',
        receivable: '',
        available_date: '',
        expired_date: '',
        type_contract: 1,
        status: 1
      },
      price: '',
      receivable: ''
    };
  },
  watch: {
    price: function price(val) {
      var value = _until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].fmc(val);
      this.price = value.s;
      this.tuition_fee.price = value.n;
    },
    receivable: function receivable(val) {
      var value = _until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].fmc(val);
      this.receivable = value.s;
      this.tuition_fee.receivable = value.n;
    }
  },
  created: function created() {
    var _this = this;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/products").then(function (response) {
      _this.html.products.list = response.data;
    });
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/branches").then(function (response) {
      _this.branches = response.data;
    });
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/tuition-fees?status=1").then(function (response) {
      _this.html.tuition_fees.list = response.data;
    });
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date) {
        this.tuition_fee.available_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
      }
    },
    selectExpiredDate: function selectExpiredDate(date) {
      if (date) {
        this.tuition_fee.expired_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("YYYY-MM-DD");
      }
    },
    saveProduct: function saveProduct() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var product_id = data.id;
        this.tuition_fee.product_id = product_id;
      } else {
        this.tuition_fee.product_id = "";
      }
    },
    saveTuitionFeeRelation: function saveTuitionFeeRelation() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var check_exit = 0;
        this.tuition_fees_relation.map(function (item) {
          if (item.id == data.id) {
            1, _readOnlyError("check_exit");
          }
        });
        if (!check_exit) {
          this.tuition_fees_relation.push(data);
        }
        this.html.tuition_fees.item = '';
      }
    },
    deleteTuitionFeeRelation: function deleteTuitionFeeRelation(data) {
      var ids_tuition = [];
      this.tuition_fees_relation.map(function (item) {
        if (data.id != item.id) {
          ids_tuition.push(item);
        }
      });
      this.tuition_fees_relation = ids_tuition;
    },
    save: function save() {
      var _this2 = this;
      var mess = "";
      var resp = true;
      if (this.tuition_fee.product_id == "") {
        mess += " - Khóa học không được để trống<br/>";
        resp = false;
      }
      if (this.tuition_fee.name == "") {
        mess += " - Tên gói phí không được để trống<br/>";
        resp = false;
      }
      if (this.tuition_fee.session == "") {
        mess += " - Số buổi học không được để trống<br/>";
        resp = false;
      }
      if (this.tuition_fee.number_of_months == "") {
        mess += " - Số tháng học không được để trống<br/>";
        resp = false;
      }
      if (this.tuition_fee.price === "") {
        mess += " - Giá niêm yết không được để trống<br/>";
        resp = false;
      }
      //  if (this.tuition_fee.receivable == "") {
      //   mess += " - Giá thực thu không được để trống<br/>";
      //   resp = false;
      // }
      if (this.tuition_fee.available_date == "") {
        mess += " - Ngày hiệu lực không được để trống<br/>";
        resp = false;
      }
      if (this.tuition_fee.expired_date == "") {
        mess += " - Ngày hết hiệu lực không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/settings/tuition-fees/add", {
        tuition_fee: this.tuition_fee,
        branches: this.branches,
        tuition_fees_relation: this.tuition_fees_relation
      }).then(function (response) {
        _this2.$vs.loading.close();
        if (response.data.status) {
          _this2.$vs.notify({
            title: 'Thành Công',
            text: response.data.message,
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          });
          _this2.$router.push('/settings/tuition-fees');
        } else {
          _this2.$vs.notify({
            title: 'Lỗi',
            text: response.data.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      })["catch"](function (e) {
        console.log(error);
        _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "mb-6 vx-col w-full"
  }, [_c("label", [_vm._v("Gói khóa học "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn khóa học",
      options: _vm.html.products.list,
      searchable: true,
      language: "tv-VN"
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
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col w-full"
  }, [_c("label", [_vm._v("Tên gói phí "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tuition_fee.name,
      expression: "tuition_fee.name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tuition_fee.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tuition_fee, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Số buổi học "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tuition_fee.session,
      expression: "tuition_fee.session"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tuition_fee.session
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tuition_fee, "session", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Số tháng học "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tuition_fee.number_of_months,
      expression: "tuition_fee.number_of_months"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.tuition_fee.number_of_months
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tuition_fee, "number_of_months", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Giá niêm yết "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.price,
      expression: "price"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.price = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Ngày hiệu lực "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày hiệu lực",
      lang: _vm.datepickerOptions.lang
    },
    on: {
      change: _vm.selectDate
    },
    model: {
      value: _vm.tuition_fee.available_date,
      callback: function callback($$v) {
        _vm.$set(_vm.tuition_fee, "available_date", $$v);
      },
      expression: "tuition_fee.available_date"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Ngày hết hiệu lực "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày hết hiệu lực",
      lang: _vm.datepickerOptions.lang
    },
    on: {
      change: _vm.selectExpiredDate
    },
    model: {
      value: _vm.tuition_fee.expired_date,
      callback: function callback($$v) {
        _vm.$set(_vm.tuition_fee, "expired_date", $$v);
      },
      expression: "tuition_fee.expired_date"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Loại gói phí")]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tuition_fee.type_contract,
      expression: "tuition_fee.type_contract"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.tuition_fee, "type_contract", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Học thử")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Chính thức")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6 vx-col md:w-1/2 w-full"
  }, [_c("label", [_vm._v("Trạng thái")]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("vs-switch", {
    attrs: {
      color: "success"
    },
    model: {
      value: _vm.tuition_fee.status,
      callback: function callback($$v) {
        _vm.$set(_vm.tuition_fee, "status", $$v);
      },
      expression: "tuition_fee.status"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("div", {
    staticClass: "mb-6"
  }, [_c("label", [_c("strong", [_vm._v("Trung tâm áp dụng")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, _vm._l(_vm.branches, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "w-full pl-8"
    }, [_c("vs-checkbox", {
      staticClass: "mt-1",
      model: {
        value: item.selected,
        callback: function callback($$v) {
          _vm.$set(item, "selected", $$v);
        },
        expression: "item.selected"
      }
    }, [_vm._v(_vm._s(item.name))])], 1);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "mb-6"
  }, [_c("label", [_c("strong", [_vm._v("Gói phí quy đổi ")])]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn gói phí quy đổi",
      options: _vm.html.tuition_fees.list,
      searchable: true,
      language: "tv-VN"
    },
    on: {
      input: _vm.saveTuitionFeeRelation
    },
    model: {
      value: _vm.html.tuition_fees.item,
      callback: function callback($$v) {
        _vm.$set(_vm.html.tuition_fees, "item", $$v);
      },
      expression: "html.tuition_fees.item"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vs-component vs-con-table stripe vs-table-primary"
  }, [_c("div", {
    staticClass: "con-tablex vs-table--content"
  }, [_c("div", {
    staticClass: "vs-con-tbody vs-table--tbody"
  }, [_c("table", {
    staticClass: "vs-table vs-table--tbody-table"
  }, [_c("thead", {
    staticClass: "vs-table--thead"
  }, [_c("tr", [_c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Khóa học")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Gói phí")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Thời gian")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Trạng thái")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Thao tác")])])]), _vm._v(" "), _vm._l(_vm.tuition_fees_relation, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(_vm._f("formatDateView")(item.available_date)) + " - " + _vm._s(_vm._f("formatDateView")(item.expired_date)))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(item.status == 1 ? "kích hoạt" : "Không kích hoạt"))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center list-action"
    }, [_c("vs-button", {
      attrs: {
        size: "small",
        color: "danger"
      },
      on: {
        click: function click($event) {
          return _vm.deleteTuitionFeeRelation(item);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-trash"
    })])], 1)]);
  })], 2)])])])])])])]), _vm._v(" "), _c("vs-alert", {
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
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("router-link", {
    staticClass: "btn btn-danger",
    attrs: {
      to: "/settings/tuition-fees"
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
  }, [_vm._v("Thêm mới")])], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/until/helper.js":
/*!******************************************!*\
  !*** ./resources/js/src/until/helper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function checkPermission(user, permission) {
  if (typeof user.permissions !== 'undefined') {
    return user.permissions.indexOf(permission) != -1;
  } else {
    return false;
  }
}
var vld = {
  email: function email(str) {
    // const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(str);
  },
  "null": function _null(str) {
    var pattern = /\S+/;
    return pattern.test(str);
  },
  num: function num(str) {
    // const pattern = /^\d+$/
    var pattern = /^-?\d+\.?\d*$/;
    return pattern.test(str);
  },
  cc: function cc(str) {
    var pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    return pattern.test(str);
  },
  visa: function visa(str) {
    var pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    return pattern.test(str);
  },
  master: function master(str) {
    var pattern = /^(?:5[1-5][0-9]{14})$/;
    return pattern.test(str);
  },
  amex: function amex(str) {
    var pattern = /^(?:3[47][0-9]{13})$/;
    return pattern.test(str);
  },
  discover: function discover(str) {
    var pattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    return pattern.test(str);
  },
  same: function same(str1, str2) {
    return str1 === str2;
  },
  phone: function phone(n) {
    var carriers = {
      '096': 'Viettel',
      '097': 'Viettel',
      '098': 'Viettel',
      '032': 'Viettel',
      '033': 'Viettel',
      '034': 'Viettel',
      '035': 'Viettel',
      '036': 'Viettel',
      '037': 'Viettel',
      '038': 'Viettel',
      '039': 'Viettel',
      '090': 'Mobifone',
      '093': 'Mobifone',
      '070': 'Mobifone',
      '071': 'Mobifone',
      '072': 'Mobifone',
      '076': 'Mobifone',
      '077': 'Mobifone',
      '078': 'Mobifone',
      '079': 'Mobifone',
      '091': 'Vinaphone',
      '094': 'Vinaphone',
      '081': 'Vinaphone',
      '082': 'Vinaphone',
      '083': 'Vinaphone',
      '084': 'Vinaphone',
      '085': 'Vinaphone',
      '087': 'Vinaphone',
      '089': 'Vinaphone',
      '059': 'Gmobile',
      '099': 'Gmobile',
      '092': 'Vietnamobile',
      '056': 'Vietnamobile',
      '058': 'Vietnamobile',
      '095': 'SFone'
    };
    var reg = /^(^0[1|3|5|7|8|9])+([0-9]{7,9})$/;
    if (!n) {
      return '';
    } else {
      var resu = isNaN(n.toString()) ? '' : 'ok';
      resu = reg.test(n) ? resu : '';
      resu = n.length >= 11 ? '' : n.length <= 9 ? '' : resu;
      resu = n.substr(0, 1) === '0' ? resu : '';
      var pr = n.substring(0, 3);
      if (carriers.hasOwnProperty(pr)) {
        resu = resu == 'ok' ? carriers[pr] : '';
      }
      return resu;
    }
  }
};
var is = {
  "in": function _in(obj, key) {
    return obj && Array.isArray(obj) && key ? parseInt(obj.indexOf(key), 10) > -1 : false;
  },
  obj: function obj(_obj) {
    return _typeof(_obj) === 'object' && !Array.isArray(_obj);
  },
  arr: function arr(obj) {
    return Array.isArray(obj);
  },
  has: function has(obj, key) {
    return _typeof(obj) === 'object' && !Array.isArray(obj) ? Object.hasOwnProperty.call(obj, key) : false;
  },
  "for": function _for(obj) {
    return Object.keys(obj);
  }
};
function dateToString(data) {
  var date = new Date(data);
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var yyyy = date.getFullYear();
  return [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
}
function fmc(input) {
  var code = '';
  var drap = null;
  var resp = {
    s: '',
    n: 0
  };
  if (!input || input.toString() === '' || input.toString() === '0') {
    resp.n = 0;
    resp.s = '0';
  } else {
    drap = input.toString().replace(/[\D\s\._\-]+/g, "");
    drap = drap ? parseInt(drap, 10) : 0;
    resp.n = drap;
    resp.s = drap === 0 ? "0" : "".concat(drap.toLocaleString("en-US"));
  }
  return resp;
}
var convertDateToString = function convertDateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + '' + (date.getMonth() + 1)) + "-" + (date.getDate() > 9 ? date.getDate() : '0' + '' + date.getDate());
};
function isGreaterThan(_from, _to) {
  var _from_time = new Date(_from); // Y-m-d
  var _to_time = new Date(_to); // Y-m-d
  return _from_time.getTime() > _to_time.getTime() ? true : false;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  dateToString: dateToString,
  checkPermission: checkPermission,
  vld: vld,
  is: is,
  fmc: fmc,
  convertDateToString: convertDateToString,
  isGreaterThan: isGreaterThan
});

/***/ }),

/***/ "./resources/js/src/views/settings/tuition_fees/add.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/settings/tuition_fees/add.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=6ff20ed4 */ "./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/tuition_fees/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4 ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=6ff20ed4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/tuition_fees/add.vue?vue&type=template&id=6ff20ed4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ff20ed4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);