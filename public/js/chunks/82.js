(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
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
      assessment: {
        branch_id: '',
        student_id: '',
        title: '',
        description: ''
      },
      student_info: {},
      alert: {
        active: false,
        body: '',
        color: ''
      },
      input_disabled: true
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
      this.resetInputAssessment();
      if (keyword && keyword.length >= 3 && this.calling === false) {
        this.calling = true;
        return new Promise(function (resolve, reject) {
          _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/assessments/search-student", {
            branch_id: _this3.assessment.branch_id,
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
      this.assessment.student_id = student.student_id;
      this.input_disabled = false;
    },
    resetInputAssessment: function resetInputAssessment() {
      this.input_disabled = true;
      this.assessment.student_id = '';
      this.assessment.title = '';
      this.assessment.description = '';
    },
    saveBranch: function saveBranch() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var branch_id = data.id;
        this.assessment.branch_id = branch_id;
      } else {
        this.assessment.branch_id = "";
      }
      this.student_info = {};
      this.resetInputAssessment();
      this.assessment.student_id = "";
    },
    save: function save() {
      var _this4 = this;
      var mess = "";
      var resp = true;
      if (this.assessment.branch_id == "") {
        mess += " - Trung tâm không được để trống<br/>";
        resp = false;
      }
      if (this.assessment.contract_id == "") {
        mess += " - Học sinh không được để trống<br/>";
        resp = false;
      }
      if (this.assessment.title == "") {
        mess += " - Tiêu đề không được để trống<br/>";
        resp = false;
      }
      if (this.assessment.description == "") {
        mess += " - Nội dung không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/lms/assessments/add", {
        assessment: this.assessment,
        student_info: this.student_info
      }).then(function (response) {
        _this4.$vs.loading.close();
        if (response.data.status == 1) {
          _this4.$vs.notify({
            title: 'Thành Công',
            text: response.data.message,
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          });
          _this4.$router.push('/lms/assessments');
        } else {
          _this4.$vs.notify({
            title: 'Lỗi',
            text: response.data.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning'
          });
        }
      })["catch"](function (e) {
        console.log(e);
        _this4.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  })], 1), _vm._v(" "), _vm.assessment.branch_id ? _c("div", {
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
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("h5", {
    staticClass: "w-full mb-3"
  }, [_c("i", {
    staticClass: "fa-solid fa-file-contract mr-1"
  }), _vm._v(" Thông tin nhận xét & đánh giá")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Tiêu đề")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assessment.title,
      expression: "assessment.title"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title"
    },
    domProps: {
      value: _vm.assessment.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.assessment, "title", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Nội dung")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assessment.description,
      expression: "assessment.description"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      rows: "8"
    },
    domProps: {
      value: _vm.assessment.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.assessment, "description", $event.target.value);
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
      to: "/lms/assessments"
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

/***/ "./resources/js/src/views/lms/assessments/add.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/lms/assessments/add.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=09194b28 */ "./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/lms/assessments/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/assessments/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=09194b28 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/lms/assessments/add.vue?vue&type=template&id=09194b28");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_09194b28__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);