(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      status: ''
    };
  },
  created: function created() {
    this.status = this.$route.query.status;
    this.email = this.$route.query.email;
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02 ***!
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
    staticClass: "h-screen flex w-full bg-img"
  }, [_vm.status == 0 ? _c("div", {
    staticClass: "vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
  }, [_c("img", {
    staticClass: "mx-auto mb-4",
    attrs: {
      src: __webpack_require__(/*! @assets/images/pages/not-authorized.png */ "./resources/assets/images/pages/not-authorized.png"),
      alt: "graphic-not-authorized"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 text-4xl d-theme-heading-color text-danger"
  }, [_vm._v("Kích hoạt tài khoản thất bại!")]), _vm._v(" "), _c("p", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 d-theme-text-inverse"
  }, [_vm._v("Link kích hoạt không hợp lệ vui lòng thử lại hoặc liên hệ với quản trị viên để được hỗ trợ.")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/"
    }
  }, [_c("vs-button", {
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      color: "primary",
      type: "filled"
    }
  }, [_vm._v("Trang chủ")])], 1)]) : _c("div", {
    staticClass: "vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
  }, [_c("img", {
    staticClass: "mx-auto mb-4",
    attrs: {
      src: __webpack_require__(/*! @assets/images/pages/not-authorized.png */ "./resources/assets/images/pages/not-authorized.png"),
      alt: "graphic-not-authorized"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 text-4xl d-theme-heading-color text-success"
  }, [_vm._v("Kích hoạt tài khoản thành công!")]), _vm._v(" "), _c("p", {
    staticClass: "sm:mx-0 mx-4 sm:mb-12 mb-8 d-theme-text-inverse"
  }, [_vm._v(" Email " + _vm._s(_vm.email) + " đã được kích hoạt thành công, đăng nhập ngay để sử dụng các tính năng hoàn toàn miễn phí.")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "large",
      to: "/pages/login"
    }
  }, [_vm._v("Đăng nhập ngay")])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/images/pages/not-authorized.png":
/*!**********************************************************!*\
  !*** ./resources/assets/images/pages/not-authorized.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/not-authorized.png?388ffe4626a1621c661f5de9ceb2463d";

/***/ }),

/***/ "./resources/js/src/views/pages/ActiveAccount.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/ActiveAccount.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveAccount.vue?vue&type=template&id=42821a02 */ "./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02");
/* harmony import */ var _ActiveAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveAccount.vue?vue&type=script&lang=js */ "./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActiveAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/ActiveAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveAccount.vue?vue&type=template&id=42821a02 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActiveAccount.vue?vue&type=template&id=42821a02");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveAccount_vue_vue_type_template_id_42821a02__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);