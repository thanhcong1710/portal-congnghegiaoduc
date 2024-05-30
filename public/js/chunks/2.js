(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-autocomplete-js */ "./node_modules/vue2-autocomplete-js/dist/vue2-autocomplete.js");
/* harmony import */ var vue2_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String,
    endpoint: {
      type: Number,
      "default": 0
    },
    placeholderStudent: {
      type: String,
      "default": 'Tìm kiếm học sinh theo tên hoặc mã LMS'
    },
    response: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    suggestStudents: {
      type: Function,
      "default": null
    },
    selectedStudent: {
      type: Object,
      "default": null
    },
    onSelectStudent: {
      type: Function,
      "default": null
    },
    beforeSearchStudent: {
      type: Function,
      "default": null
    },
    afterSearchStudent: {
      type: Function,
      "default": null
    }
  },
  data: function data() {
    return {
      name: '',
      isLoading: false,
      searchClass: {
        active: this.ajaxloading ? false : true,
        'icon-group': true,
        search: true
      }
    };
  },
  components: {
    Autocomplete: vue2_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  watch: {
    endpoint: function endpoint() {
      console.log("Endpoint: ".concat(this.endpoint));
    }
  },
  methods: {
    selectItem: function selectItem(student) {
      this.$emit('doSelectStudent', student);
      this.onSelectStudent ? this.onSelectStudent(student) : null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33 ***!
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
    staticClass: "suggetion-search"
  }, [_c("input", {
    attrs: {
      type: "hidden",
      "v-model": _vm.selectedStudent
    }
  }), _vm._v(" "), _c("autocomplete", {
    attrs: {
      url: "/api/students/suggest/",
      anchor: "label",
      label: "branch_name",
      name: "search_sugget_student",
      id: "sugget_student",
      className: "search-autocomplete",
      title: _vm.title,
      classes: {
        wrapper: "form-wrapper",
        input: "vs-inputx vs-input--input normal",
        list: "data-list",
        item: "data-list-item"
      },
      min: 3,
      options: _vm.response,
      debounce: 10,
      filterByAnchor: true,
      placeholder: _vm.placeholderStudent,
      onShouldGetData: _vm.suggestStudents,
      onSelect: _vm.selectItem
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "icon-group search",
    "class": {
      active: !_vm.isLoading
    }
  }, [_c("i", {
    staticClass: "fa fa-search"
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suggetion-search {\n  width:100%;\n  position: relative;\n}\n.suggetion-search .icon-group {\n  position: absolute;\n  height: 35px;\n  width: 43px;\n  top:0;\n  display: none;\n}\n[dir] .suggetion-search .icon-group {\n  padding:1px;\n}\n[dir=ltr] .suggetion-search .icon-group {\n  right: 0;\n}\n[dir=rtl] .suggetion-search .icon-group {\n  left: 0;\n}\n.suggetion-search .icon-group.active {\n  display: block;\n}\n[dir] .suggetion-search .icon-group.loading {\n  padding: 4px 0 0 0;\n  text-align: center;\n}\n[dir] .suggetion-search .icon-group.search {\n  text-align: center;\n}\n[dir=ltr] .suggetion-search .icon-group.search {\n  padding: 7px 4px 0 5px;\n}\n[dir=rtl] .suggetion-search .icon-group.search {\n  padding: 7px 5px 0 4px;\n}\n.autocomplete ul{\n  position: absolute;\n  list-style: none;\n  width: 100%;\n  z-index: 99999;\n  display: inline-block;\n  min-width: 15%;\n}\n[dir] .autocomplete ul{\n  background: #eaeef1;\n  padding: 0;\n  border-bottom: 1px solid #c2cfd6;\n  margin: 0;\n}\n[dir=ltr] .autocomplete ul{\n  border-left: 1px solid #c2cfd6;\n  border-right: 1px solid #c2cfd6;\n}\n[dir=rtl] .autocomplete ul{\n  border-right: 1px solid #c2cfd6;\n  border-left: 1px solid #c2cfd6;\n}\n.autocomplete ul:before{\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: 0;\n}\n[dir] .autocomplete ul:before{\n  border: 1px solid #029c11;\n  background: #076d00;\n}\n[dir=ltr] .autocomplete ul:before{\n  left: 46%;\n}\n[dir=rtl] .autocomplete ul:before{\n  right: 46%;\n}\n.autocomplete ul li a {\n  text-decoration: none;\n  display: block;\n  color: #2b2b2b;\n}\n[dir] .autocomplete ul li a {\n  background: #f7f7f7;\n  padding: 5px;\n  border-bottom:1px solid #d2dbe0;\n}\n[dir=ltr] .autocomplete ul li a {\n  padding-left: 10px;\n}\n[dir=rtl] .autocomplete ul li a {\n  padding-right: 10px;\n}\n.autocomplete ul li a b {\n  color:#333;\n  font-weight: 500;\n  font-size: 12px;\n}\n.autocomplete ul li a span,\n.autocomplete ul li a .autocomplete-anchor-label{\n  display: block;\n  color: #666666;\n  font-weight: 400;\n  font-size: 11px;\n}\n[dir] .autocomplete ul li a span, [dir] .autocomplete ul li a .autocomplete-anchor-label{\n  margin-top: 3px;\n}\n[dir] .autocomplete ul li:hover, [dir] .autocomplete ul li.focus-list, [dir] .autocomplete ul li.focus-list a {\n  background: #f02929;\n}\n.autocomplete ul li a:hover, .autocomplete ul li:hover a b, .autocomplete ul li a:hover b, .autocomplete ul li.focus-list a b {\n  color: #ffffff!important;\n}\n[dir] .autocomplete ul li a:hover, [dir] .autocomplete ul li:hover a b, [dir] .autocomplete ul li a:hover b, [dir] .autocomplete ul li.focus-list a b {\n  background: #f02929;\n  text-shadow: 0 1px 1px #111;\n}\n.autocomplete ul li.focus-list a span {\n  color: #f9f9f9!important;\n}\n[dir] .autocomplete ul li.focus-list a span {\n  text-shadow: 0 1px 0 #111;\n}\n.autocomplete ul li a:hover .autocomplete-anchor-label,\n.autocomplete ul li.focus-list a span,\n.autocomplete ul li a:hover .autocomplete-anchor-label,\n.autocomplete ul li.focus-list a span{\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css");

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

/***/ "./resources/js/src/components/StudentSearch.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/StudentSearch.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentSearch.vue?vue&type=template&id=6ad74b33 */ "./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33");
/* harmony import */ var _StudentSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentSearch.vue?vue&type=script&lang=js */ "./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css */ "./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StudentSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/StudentSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentSearch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=style&index=0&id=6ad74b33&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_style_index_0_id_6ad74b33_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentSearch.vue?vue&type=template&id=6ad74b33 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/StudentSearch.vue?vue&type=template&id=6ad74b33");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentSearch_vue_vue_type_template_id_6ad74b33__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);