(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/axios.js */ "./resources/js/src/http/axios.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      role: '',
      group_permissions: ''
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/roles/".concat(this.$route.params.role_id)).then(function (response) {
        _this.role = response.data.role_info;
        _this.group_permissions = response.data.group_permissions;
        _this.$vs.loading.close();
      })["catch"](function (error) {
        console.log(error);
        _this.$vs.loading.close();
      });
    },
    reset: function reset() {
      this.$router.push('/settings/roles');
    },
    savePermissions: function savePermissions() {
      var _this2 = this;
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/roles/permissions", {
        role_id: this.role.id,
        group_permissions: this.group_permissions
      }).then(function (response) {
        _this2.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
        _this2.$vs.loading.close();
      })["catch"](function (error) {
        console.log(error);
        _this2.$vs.loading.close();
      });
    },
    changeGroup: function changeGroup($k) {
      var _this3 = this;
      this.group_permissions[$k].permissions.forEach(function (element) {
        element.active = _this3.group_permissions[$k].active;
      });
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0 ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      id: "page-roles-list"
    }
  }, [_c("vx-card", {
    staticClass: "mt-5",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("h3", [_vm._v(_vm._s(_vm.role.name))]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticStyle: {
      "font-size": "16px"
    },
    attrs: {
      "for": "permission"
    }
  }, [_vm._v("Chọn phân hệ và quyền "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, _vm._l(_vm.group_permissions, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-col md:w-1/2 w-full mt-3"
    }, [_c("vs-checkbox", {
      staticClass: "mt-1",
      on: {
        input: function input($event) {
          return _vm.changeGroup(index);
        }
      },
      model: {
        value: item.active,
        callback: function callback($$v) {
          _vm.$set(item, "active", $$v);
        },
        expression: "item.active"
      }
    }, [_c("strong", [_vm._v(_vm._s(item.description))])]), _vm._v(" "), _vm._l(item.permissions, function (item_per, index_per) {
      return _c("div", {
        key: index_per,
        staticClass: "w-full pl-8"
      }, [_c("vs-checkbox", {
        staticClass: "mt-1",
        model: {
          value: item_per.active,
          callback: function callback($$v) {
            _vm.$set(item_per, "active", $$v);
          },
          expression: "item_per.active"
        }
      }, [_vm._v(_vm._s(item_per.description))])], 1);
    })], 2);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "mt-10",
    staticStyle: {
      overflow: "hidden"
    }
  }, [_c("vs-button", {
    attrs: {
      color: "rgb(154 167 169)",
      type: "filled"
    },
    on: {
      click: _vm.reset
    }
  }, [_vm._v("Hủy")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success",
      type: "filled"
    },
    on: {
      click: _vm.savePermissions
    }
  }, [_vm._v("Lưu")])], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 600px) {\n#page-roles-list .vs-table--search {\n    max-width: 360px;\n}\n#page-roles-list .vs-table--search-input{\n    width: 360px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css");

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

/***/ "./resources/js/src/views/settings/roles/permissions.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/settings/roles/permissions.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions.vue?vue&type=template&id=67f64cd0 */ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0");
/* harmony import */ var _permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions.vue?vue&type=script&lang=js */ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css */ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/roles/permissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./permissions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=style&index=0&id=67f64cd0&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_style_index_0_id_67f64cd0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0 ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./permissions.vue?vue&type=template&id=67f64cd0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/roles/permissions.vue?vue&type=template&id=67f64cd0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_permissions_vue_vue_type_template_id_67f64cd0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);