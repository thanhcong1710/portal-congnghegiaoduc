(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/axios.js */ "./resources/js/src/http/axios.js");
/* harmony import */ var _until_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../until/helper.js */ "./resources/js/src/until/helper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "vue-select": vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a,
    moment: moment__WEBPACK_IMPORTED_MODULE_3___default.a,
    datepicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a
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
      check_list: [],
      active_tab: 1,
      alert: {
        active: false,
        body: '',
        color: ''
      },
      html: {
        province: {
          item: '',
          list: []
        },
        district: {
          item: '',
          list: []
        },
        jobs: {
          item: '',
          list: []
        },
        source: {
          item: '',
          list: []
        },
        source_detail: {
          item: '',
          list: []
        }
      },
      branches: [],
      modal_ticket: {
        title: "THÊM MỚI TICKET",
        show: false,
        color: "info",
        closeOnBackdrop: false,
        size: "lg",
        error_message: "",
        alert: {
          active: false,
          body: '',
          color: ''
        }
      },
      modal_care: {
        title: "THÊM MỚI CHĂM SÓC",
        show: false,
        color: "info",
        closeOnBackdrop: false,
        size: "lg",
        error_message: "",
        alert: {
          active: false,
          body: '',
          color: ''
        }
      },
      modal_student: {
        title: "THÊM MỚI HỌC SINH",
        show: false,
        color: "info",
        closeOnBackdrop: false,
        size: "lg",
        error_message: "",
        alert: {
          active: false,
          body: '',
          color: ''
        }
      },
      modal_checkin: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        title: "TẠO CHECKIN HỌC SINH",
        show: false,
        color: "info",
        closeOnBackdrop: false,
        size: "lg",
        error_message: "",
        branch_id: "",
        checkin_at: "",
        student_id: ""
      }, "error_message", ""), "disabled", false), "type_product", ""), "alert", {
        active: false,
        body: '',
        color: ''
      }),
      parent_input: {
        job: "",
        source: "",
        source_detail: "",
        province: "",
        district: ""
      },
      parent: {
        id: "",
        gender: "",
        name: "",
        birthday: "",
        mobile_1: "",
        mobile_2: "",
        note: "",
        email: "",
        status: 0,
        province_id: "",
        district_id: "",
        job_id: "",
        source_id: "",
        source_detail_id: "",
        address: "",
        owner_id: "",
        c2c_mobile: ""
      },
      activeItem: 'customer_care',
      methods: [],
      total_unsuccess: 0,
      tickets: [],
      ticket: {
        parent_id: "",
        type: "",
        description: "",
        note: "",
        status: ""
      },
      cares: [],
      care: {
        method_id: "",
        care_date: "",
        note: "",
        parent_id: "",
        attached_file: "",
        file_name: ""
      },
      students: [],
      student: {
        id: 0,
        parent_id: "",
        name: "",
        gender: "",
        school_level: "",
        birthday: "",
        select_school: "",
        note: ""
      },
      logs: [],
      users_manager: [],
      tmp_owner_id: "",
      tmp_status: "",
      tmp_level: "",
      phone: {
        css_class: 'alert alert-success',
        show: false,
        title: 'Đang thực hiện cuộc gọi đi',
        status: 0,
        description: '',
        show_input_note: false,
        care_id: '',
        note: '',
        select_note: '',
        select_note_status: '',
        select_note_status_sub: '',
        next_care_date: '',
        alert: {
          active: false,
          body: '',
          color: ''
        }
      },
      sms: {
        content: '',
        show: false,
        title: 'Gửi tin nhắn SMS',
        phone: ''
      },
      template_note: [],
      disabled_action: false,
      disabled_edit: true,
      c2c_info: "",
      products: []
    };
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/products").then(function (response) {
              _this.products = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/methods").then(function (response) {
              _this.methods = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/branches").then(function (response) {
              _this.branches = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/users/get-data/users-manager").then(function (response) {
              _this.users_manager = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/provinces").then(function (response) {
              _this.html.province.list = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/jobs").then(function (response) {
              _this.html.jobs.list = response.data;
            });
            _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/sources").then(function (response) {
              _this.html.source.list = response.data;
            });
            _context.next = 9;
            return _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/source_detail").then(function (response) {
              _this.html.source_detail.list = response.data;
            });
          case 9:
            _this.loadDetail();
            _this.loadCares();
            _this.loadTickets();
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: (_methods = {
    loadDetail: function loadDetail() {
      var _this2 = this;
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/crm/parents/show/".concat(this.$route.params.id)).then(function (response) {
        _this2.$vs.loading.close();
        if (response.data.length !== 0) {
          _this2.parent = response.data;
          _this2.parent_input.job = _this2.html.jobs.list.filter(function (item) {
            return item.id == response.data.job_id;
          })[0];
          _this2.parent_input.source = _this2.html.source.list.filter(function (item) {
            return item.id == response.data.source_id;
          })[0];
          _this2.parent_input.source_detail = _this2.html.source_detail.list.filter(function (item) {
            return item.id == response.data.source_detail_id;
          })[0];
          _this2.parent_input.province = _this2.html.province.list.filter(function (item) {
            return item.id == response.data.province_id;
          })[0];
          _this2.tmp_district_id = response.data.district_id;
          _this2.tmp_owner_id = response.data.owner_id;
          _this2.tmp_status = response.data.status;
          _this2.tmp_level = response.data.level;
          _this2.getDistrict(_this2.parent_input.province);
        } else {
          _this2.$router.push({
            path: "/crm/parent"
          });
        }
      });
    },
    updateNextCareDate: function updateNextCareDate() {
      var _this3 = this;
      var data = {
        parent_id: this.$route.params.id,
        next_care_date: document.getElementById('next_care_date').value
      };
      this.$vs.loading();
      ;
      _until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].p("/api/parents/update_next_care_date", data).then(function (response) {
        _this3.loadDetail();
      })["catch"](function (e) {});
    },
    showModalAssgin: function showModalAssgin() {
      this.modal_assign.show = true;
    },
    showModalChangeStatus: function showModalChangeStatus() {
      this.modal_status.show = true;
    },
    validatePhone: function validatePhone() {
      var _this4 = this;
      if (this.parent.mobile_1) {
        var data = {
          phone: this.parent.mobile_1,
          parent_id: this.parent.id
        };
        this.$vs.loading();
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/validate_phone", data).then(function (response) {
          _this4.$vs.loading.close();
          if (response.data.status == 0) {
            _this4.parent.mobile_1 = "";
            _this4.modal.color = "warning";
            _this4.modal.body = response.data.message;
            _this4.modal.show = true;
          }
        });
      }
    },
    validatePhone2: function validatePhone2() {
      var _this5 = this;
      if (this.parent.mobile_2) {
        var data = {
          phone: this.parent.mobile_2,
          parent_id: this.parent.id
        };
        this.$vs.loading();
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/validate_phone", data).then(function (response) {
          _this5.$vs.loading.close();
          if (response.data.status == 0) {
            _this5.parent.mobile_2 = "";
            _this5.modal.color = "warning";
            _this5.modal.body = response.data.message;
            _this5.modal.show = true;
          } else if (response.data.status == 2) {
            _this5.modal_overwrite.show = true;
            _this5.modal_overwrite.message = response.data.message;
          }
        });
      }
    },
    validatePhoneC2C: function validatePhoneC2C() {
      var _this6 = this;
      this.c2c_info = "";
      if (this.parent.c2c_mobile) {
        var data = {
          phone: this.parent.c2c_mobile
        };
        this.$vs.loading();
        _until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].p("/api/crm/parents/validate_c2c_phone", data).then(function (response) {
          _this6.$vs.loading.close();
          if (response.data.status == 0) {
            _this6.parent.c2c_mobile = "";
            _this6.modal.color = "warning";
            _this6.modal.body = response.data.message;
            _this6.modal.show = true;
          } else {
            _this6.c2c_info = response.data.message;
          }
        });
      }
    },
    selectDateParent: function selectDateParent() {
      if (date) {
        this.parent.birthday = moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format("YYYY-MM-DD");
      }
    },
    selectDate: function selectDate(date) {
      if (date) {
        this.student.birthday = moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format("YYYY-MM-DD");
      }
    },
    getDistrict: function getDistrict() {
      var _this7 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var province_id = data.id;
        this.parent.province = data;
        this.parent.province_id = province_id;
        this.$vs.loading();
        _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/system/provinces/".concat(province_id, "/districts")).then(function (response) {
          _this7.$vs.loading.close();
          _this7.html.district.list = response.data;
          if (_this7.tmp_district_id) {
            _this7.parent_input.district = _this7.html.district.list.filter(function (item) {
              return item.id == _this7.tmp_district_id;
            })[0];
          } else {
            _this7.parent.district_id = "";
            _this7.parent_input.district = "";
          }
        });
      } else {
        this.parent.province = "";
        this.parent.province_id = "";
        this.html.district.list = [];
        this.parent.district = "";
        this.parent.district_id = "";
      }
    },
    saveDistrict: function saveDistrict() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var district_id = data.id;
        this.parent_input.district = data;
        this.parent.district_id = district_id;
      } else {
        this.parent_input.district = "";
        this.parent.district_id = "";
      }
    },
    saveJob: function saveJob() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var job_id = data.id;
        this.parent_input.job = data;
        this.parent.job_id = job_id;
      } else {
        this.parent_input.job = "";
        this.parent.job_id = "";
      }
    },
    saveSource: function saveSource() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var source_id = data.id;
        this.parent_input.source = data;
        this.parent.source_id = source_id;
      } else {
        this.parent_input.source = "";
        this.parent.source_id = "";
      }
    },
    saveSourceDetail: function saveSourceDetail() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data && _typeof(data) === 'object') {
        var source_id = data.id;
        this.parent_input.source_detail = data;
        this.parent.source_detail_id = source_id;
      } else {
        this.parent_input.source_detail = "";
        this.parent.source_detail_id = "";
      }
    },
    reloadPage: function reloadPage() {
      location.reload();
    },
    saveInfo: function saveInfo() {
      var _this8 = this;
      var mess = "";
      var resp = true;
      if (this.parent.gender == "") {
        mess += " - Danh xưng không được để trống<br/>";
        resp = false;
      }
      if (this.parent.name == "") {
        mess += " - Họ tên không được để trống<br/>";
        resp = false;
      }
      if (this.parent.mobile_1 == "") {
        mess += " - Số điện thoại không được để trống<br/>";
        resp = false;
      }
      if (this.parent.mobile_1 != "" && !_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].vld.phone(this.parent.mobile_1)) {
        mess += " - Số điện thoại không đúng định dạng<br/>";
        resp = false;
      }
      if (this.parent.mobile_2 != null && this.parent.mobile_2 != "" && !_until_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"].vld.phone(this.parent.mobile_2)) {
        mess += " - Số điện thoại 2 không đúng định dạng<br/>";
        resp = false;
      }
      if (this.parent.source_id == "") {
        mess += " - Nguồn không được để trống<br/>";
        resp = false;
      }
      if (!resp) {
        this.alert.color = 'danger';
        this.alert.body = mess;
        this.alert.active = true;
        return false;
      }
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/update", this.parent).then(function (response) {
        _this8.$vs.loading.close();
        ;
        _this8.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
        _this8.disabled_edit = true;
      })["catch"](function (e) {
        console.log(e);
        _this8.$vs.loading.close();
      });
    },
    openConfirmChangeLevel: function openConfirmChangeLevel() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Thông báo',
        text: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n c\u1EADp nh\u1EADt level c\u1EE7a kh\xE1ch h\xE0ng?",
        accept: this.changeLevel,
        cancel: this.cancelChangeLevel,
        acceptText: 'Cập nhật',
        cancelText: 'Hủy'
      });
    },
    cancelChangeLevel: function cancelChangeLevel() {
      this.tmp_level = this.parent.level;
    },
    changeLevel: function changeLevel() {
      var _this9 = this;
      var data = {
        parent_id: this.parent.id,
        level: this.tmp_level
      };
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/change_level", data).then(function (response) {
        _this9.$vs.loading.close();
        _this9.loadDetail();
        _this9.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
      })["catch"](function (e) {});
    },
    openConfirmChangeStatus: function openConfirmChangeStatus() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Thông báo',
        text: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n c\u1EADp nh\u1EADt tr\u1EA1ng th\xE1i c\u1EE7a kh\xE1ch h\xE0ng?",
        accept: this.changeStatus,
        cancel: this.cancelChangeStaus,
        acceptText: 'Cập nhật',
        cancelText: 'Hủy'
      });
    },
    cancelChangeStaus: function cancelChangeStaus() {
      this.tmp_status = this.parent.status;
    },
    changeStatus: function changeStatus() {
      var _this10 = this;
      var data = {
        parent_id: this.parent.id,
        status: this.tmp_status
      };
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/change_status", data).then(function (response) {
        _this10.$vs.loading.close();
        _this10.loadDetail();
        _this10.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
      })["catch"](function (e) {});
    },
    openConfirmAssgin: function openConfirmAssgin() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Thông báo',
        text: "B\u1EA1n ch\u1EAFc ch\u1EAFn mu\u1ED1n thay \u0111\u1ED5i ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch c\u1EE7a kh\xE1ch h\xE0ng?",
        accept: this.changeAssgin,
        cancel: this.cancelChangeAssgin,
        acceptText: 'Cập nhật',
        cancelText: 'Hủy'
      });
    },
    cancelChangeAssgin: function cancelChangeAssgin() {
      this.tmp_owner_id = this.parent.owner_id;
    },
    changeAssgin: function changeAssgin() {
      var _this11 = this;
      var data = {
        parent_id: this.parent.id,
        owner_id: this.tmp_owner_id
      };
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/assign", data).then(function (response) {
        _this11.$vs.loading.close();
        _this11.loadDetail();
        _this11.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
      });
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "updateNextCareDate", function updateNextCareDate() {
    var _this12 = this;
    var data = {
      parent_id: this.$route.params.id,
      next_care_date: document.getElementById('next_care_date').value
    };
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/update_next_care_date", data).then(function (response) {
      _this12.$vs.loading.close();
      _this12.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
    })["catch"](function (e) {});
  }), "changeTab", function changeTab() {
    if (this.active_tab == 1) {
      this.loadTickets();
    } else if (this.active_tab == 2) {
      this.loadCares();
    } else if (this.active_tab == 3) {
      this.loadStudents();
    } else if (this.active_tab == 4) {
      this.loadLogs();
    } else {
      this.loadDetail();
    }
  }), "loadLogs", function loadLogs() {
    var _this13 = this;
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/crm/parents/get_logs/".concat(this.parent.id)).then(function (response) {
      _this13.$vs.loading.close();
      _this13.logs = response.data;
    })["catch"](function (e) {});
  }), "showModalTicket", function showModalTicket() {
    this.modal_ticket.show = true;
    this.modal_ticket.error_message = "";
    this.ticket.parent_id = "";
    this.ticket.type = "";
    this.ticket.description = "";
    this.ticket.note = "";
    this.ticket.status = "";
  }), "loadTickets", function loadTickets() {
    var _this14 = this;
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/crm/ticket/get_all_data/".concat(this.$route.params.id)).then(function (response) {
      _this14.$vs.loading.close();
      _this14.tickets = response.data.list;
      _this14.total_unsuccess = response.data.total_unsuccess;
    })["catch"](function (e) {});
  }), "addTicket", function addTicket() {
    var _this15 = this;
    this.ticket.parent_id = this.parent.id;
    var mess = "";
    var resp = true;
    if (this.ticket.type == "") {
      mess += " - Loại ticket không được để trống<br/>";
      resp = false;
    }
    if (this.ticket.description == "") {
      mess += " - Nội dung không được để trống<br/>";
      resp = false;
    }
    if (!resp) {
      this.modal_ticket.alert.color = 'danger';
      this.modal_ticket.alert.body = mess;
      this.modal_ticket.alert.active = true;
      return false;
    }
    this.$vs.loading();
    this.modal_ticket.show = false;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/ticket/add", this.ticket).then(function (response) {
      _this15.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this15.$vs.loading.close();
      _this15.loadTickets();
    })["catch"](function (e) {});
  }), "updateTicket", function updateTicket(data) {
    var _this16 = this;
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/ticket/update", data).then(function (response) {
      _this16.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this16.$vs.loading.close();
      _this16.loadTickets();
    })["catch"](function (e) {});
  }), "showModalCare", function showModalCare() {
    // document.getElementById('published_date').value=""
    this.modal_care.show = true;
    this.modal_care.error_message = "";
    this.care.method_id = "";
    this.care.note = "";
    this.care.attached_file = "";
    this.care.file_name = "";
  }), "loadCares", function loadCares() {
    var _this17 = this;
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/crm/care/get_all_data/".concat(this.$route.params.id)).then(function (response) {
      _this17.$vs.loading.close();
      _this17.cares = response.data;
    })["catch"](function (e) {});
  }), "addCare", function addCare() {
    var _this18 = this;
    this.care.parent_id = this.parent.id;
    var mess = "";
    var resp = true;
    if (this.care.method_id == "") {
      mess += " - Phương thức chăm sóc không được để trống<br/>";
      resp = false;
    }
    if (this.care.note == "") {
      mess += " - Nội dung chăm sóc không được để trống<br/>";
      resp = false;
    }
    // if (this.care.file_name == "") {
    //   mess += " - File đính kèm không được để trống<br/>";
    //   resp = false;
    // }
    if (!resp) {
      this.modal_care.alert.color = 'danger';
      this.modal_care.alert.body = mess;
      this.modal_care.alert.active = true;
      return false;
    }
    this.$vs.loading();
    this.modal_care.show = false;
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/care/add", this.care).then(function (response) {
      _this18.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this18.$vs.loading.close();
      _this18.loadCares();
    })["catch"](function (e) {});
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "fileChanged", function fileChanged(e) {
    var _this19 = this;
    var fileReader = new FileReader();
    var fileName = e.target.value.split("\\").pop();
    this.care.file_name = fileName;
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
      _this19.care.attached_file = e.target.result;
    };
  }), "showSendSms", function showSendSms(phone) {
    this.sms.show = true;
    this.sms.phone = phone;
    this.sms.content = '';
    this.sms.title = 'Gửi tin nhắn SMS tới SĐT - ' + phone;
  }), "sendSms", function sendSms() {
    var _this20 = this;
    if (this.sms.content) {
      var data = {
        parent_id: this.$route.params.id,
        content: this.sms.content,
        phone: this.sms.phone
      };
      this.$vs.loading();
      _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/parents/send_sms", data).then(function (response) {
        _this20.$vs.loading.close();
        _this20.sms.show = false;
        _this20.$vs.notify({
          title: 'Thành Công',
          text: response.data.message,
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check'
        });
        _this20.loadCares();
      })["catch"](function (e) {});
    }
  }), "callPhone", function callPhone(phone) {
    this.phone.show = true;
    this.phone.status = 0;
    this.phone.select_note = "";
    this.phone.show_input_note = false;
    this.phone.css_class = 'alert alert-success';
    this.phone.title = "Đang thực hiện cuộc gọi đi đến SĐT - " + phone + " ...";
    this.phone.care_id = '';
    this.phone.note = '';
    this.phone.select_note_status = '', this.phone.select_note_status_sub = '', this.phone.next_care_date = '', this.phone.alert.body = '';
    this.phone.alert.color = '';
  }), "updateNotePhone", function updateNotePhone() {
    var _this21 = this;
    var mess = "";
    var resp = true;
    this.phone.alert.body = '';
    this.phone.alert.color = '';
    if (this.phone.select_note_status == "") {
      mess += " - Trạng thái cuộc gọi không được để trống<br/>";
      resp = false;
    }
    if (['5', '6', '7'].indexOf(this.phone.select_note_status) > -1 && this.phone.select_note_status_sub == '') {
      mess += " - Chi tiết trạng thái cuộc gọi không được để trống<br/>";
      resp = false;
    }
    if (this.phone.note == "") {
      mess += " - Ghi chú cuộc gọi không được để trống<br/>";
      resp = false;
    }
    if (!resp) {
      this.phone.alert.color = 'danger';
      this.phone.alert.body = mess;
      this.phone.alert.active = true;
      return false;
    }
    var data = {
      method_id: 1,
      note: this.phone.note,
      parent_id: this.parent.id,
      attached_file: "",
      file_name: "",
      care_date: "",
      call_status_sub: this.phone.select_note_status_sub,
      call_status: this.phone.select_note_status
    };
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/care/add", data).then(function (response) {
      _this21.$vs.loading.close();
      _this21.phone.show = false;
      _this21.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this21.loadCares();
    })["catch"](function (e) {});
  }), "showModalStudent", function showModalStudent(data) {
    if (data == 0) {
      this.modal_student.show = true;
      this.modal_student.error_message = "";
      this.modal_student.title = "THÊM MỚI HỌC SINH";
      this.student.id = 0;
      this.student.parent_id = "";
      this.student.name = "";
      this.student.gender = "";
      this.student.school_level = "";
      this.student.birthday = "";
      this.student.select_school = "";
      this.student.note = "";
    } else {
      console.log(data);
      this.modal_student.show = true;
      this.modal_student.error_message = "";
      this.modal_student.title = "CẬP NHẬT THÔNG TIN HỌC SINH";
      this.student.id = data.id;
      this.student.parent_id = data.parent_id;
      this.student.name = data.name;
      this.student.gender = data.gender;
      this.student.school_level = data.school_level;
      this.student.birthday = data.birthday;
      this.student.select_school = data.school;
      this.student.school = data.school;
      this.student.note = data.note;
      this.getSchools();
    }
  }), "showModalCheckin", function showModalCheckin(item) {
    this.modal_checkin.show = true;
    this.modal_checkin.student_id = item.id;
    this.modal_checkin.branch_id = this.parent.branch_id;
    this.modal_checkin.checkin_at = "";
    this.modal_checkin.error_message = "";
    this.modal_checkin.type_product = "";
  }), "checkin", function checkin() {
    var _this22 = this;
    var mess = "";
    var resp = true;
    if (this.modal_checkin.branch_id == "") {
      mess += " - Trung tâm checkin không được để trống<br/>";
      resp = false;
    }
    if (this.modal_checkin.checkin_at == "") {
      mess += " - Thời gian checkin không được để trống<br/>";
      resp = false;
    }
    if (this.modal_checkin.type_product == "") {
      mess += " - Khóa học không được để trống<br/>";
      resp = false;
    }
    if (!resp) {
      this.modal_checkin.alert.color = 'danger';
      this.modal_checkin.alert.body = mess;
      this.modal_checkin.alert.active = true;
      return false;
    }
    var data = {
      owner_id: this.parent.owner_id,
      student_id: this.modal_checkin.student_id,
      branch_id: this.modal_checkin.branch_id,
      checkin_at: moment__WEBPACK_IMPORTED_MODULE_3___default()(this.modal_checkin.checkin_at).format('YYYY-MM-DD HH:mm'),
      type_product: this.modal_checkin.type_product
    };
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/students/checkin", data).then(function (response) {
      _this22.$vs.loading.close();
      _this22.modal_checkin.show = false;
      _this22.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this22.loadStudents();
    })["catch"](function (e) {});
  }), "showModalUpdateCheckin", function showModalUpdateCheckin(item) {
    this.modal_checkin.show = true;
    this.modal_checkin.student_id = item.id;
    this.modal_checkin.branch_id = item.checkin_branch_id;
    this.modal_checkin.checkin_at = item.checkin_at;
    this.modal_checkin.type_product = item.type_product;
    this.modal_checkin.error_message = "";
  }), "addStudent", function addStudent() {
    var _this23 = this;
    this.student.parent_id = this.parent.id;
    var mess = "";
    var resp = true;
    if (this.student.name == "") {
      mess += " - Tên học sinh không được để trống<br/>";
      resp = false;
    }
    if (this.student.birthday == "") {
      mess += " - Ngày sinh không được để trống<br/>";
      resp = false;
    }
    if (this.student.gender == "") {
      mess += " - Giới tính không được để trống<br/>";
      resp = false;
    }
    if (!resp) {
      this.modal_student.alert.color = 'danger';
      this.modal_student.alert.body = mess;
      this.modal_student.alert.active = true;
      return false;
    }
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].p("/api/crm/students/add", this.student).then(function (response) {
      _this23.modal_student.show = false;
      _this23.$vs.loading.close();
      _this23.$vs.notify({
        title: 'Thành Công',
        text: response.data.message,
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
      _this23.loadStudents();
    })["catch"](function (e) {});
  }), _defineProperty(_methods, "loadStudents", function loadStudents() {
    var _this24 = this;
    this.$vs.loading();
    _http_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/crm/students/get_all_data/".concat(this.$route.params.id)).then(function (response) {
      _this24.students = response.data;
      _this24.$vs.loading.close();
    })["catch"](function (e) {});
  })),
  filters: {
    genTextGender: function genTextGender(item) {
      var resp = '';
      if (item == 'M') {
        resp = 'Nam';
      } else {
        resp = 'Nữ';
      }
      return resp;
    },
    genStudentStatus: function genStudentStatus(item) {
      var resp = '';
      if (item == 0) {
        resp = 'Mới tạo';
      } else if (item == 1) {
        resp = 'Thêm mới checkin';
      } else if (item == 2) {
        resp = 'Đã đến checkin';
      } else if (item == 3) {
        resp = 'Đã lên chính thức';
      }
      return resp;
    },
    genTypeTicket: function genTypeTicket(item) {
      var resp = '';
      if (item == 1) {
        resp = 'Yêu cầu dịch vụ';
      } else if (item == 2) {
        resp = 'Yêu cầu hỗ trợ';
      } else if (item == 2) {
        resp = 'Khiếu lại';
      } else {
        resp = 'Báo lỗi';
      }
      return resp;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c ***!
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
      id: "page-parent-detail"
    }
  }, [_c("vx-card", {
    staticClass: "mb-base",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3 w-full item-first"
  }, [_c("div", {
    staticStyle: {
      "float": "left",
      width: "110px"
    }
  }, [_c("img", {
    staticClass: "rounded",
    attrs: {
      src: __webpack_require__(/*! @assets/images/common/avatar-default.jpg */ "./resources/assets/images/common/avatar-default.jpg"),
      width: "100%"
    }
  })]), _vm._v(" "), _c("div", {
    staticStyle: {
      "float": "left",
      padding: "10px",
      width: "calc(100% - 110px)"
    }
  }, [_c("h5", [_c("strong", [_vm._v(_vm._s(_vm.parent.name))])]), _vm._v(" "), _c("p", {
    staticClass: "list-action",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.parent.mobile_1))]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.callPhone(_vm.parent.mobile_1);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-phone"
  })]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.showSendSms(_vm.parent.mobile_1);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-sms"
  })])], 1), _vm._v(" "), _vm.parent.mobile_2 ? _c("p", {
    staticClass: "list-action",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.parent.mobile_2))]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.callPhone(_vm.parent.mobile_2);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-phone"
  })]), _vm._v(" "), _c("vs-button", {
    attrs: {
      size: "small"
    },
    on: {
      click: function click($event) {
        return _vm.showSendSms(_vm.parent.mobile_2);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-sms"
  })])], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3 w-full"
  }, [_c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Liên hệ lần cuối: " + _vm._s(_vm.parent.last_care))]), _vm._v(" "), _c("p", {
    staticClass: "mb-1"
  }, [_vm._v("Tương tác: "), _c("strong", [_vm._v(_vm._s(_vm.parent.num_care))])]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("p", [_c("i", {
    staticClass: "fa fa-calendar"
  }), _vm._v(" Lịch chăm sóc tiếp theo")]), _vm._v(" "), _c("p", {
    staticClass: "mb-1"
  }, [_c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "datetime-local",
      id: "next_care_date",
      disabled: _vm.disabled_action
    },
    domProps: {
      value: _vm.parent.next_care_date
    },
    on: {
      change: _vm.updateNextCareDate
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/3 w-full"
  }, [_c("p", [_vm._v("Level")]), _vm._v(" "), _c("p", {
    staticClass: "mb-1"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_level,
      expression: "tmp_level"
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
        _vm.tmp_level = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.openConfirmChangeLevel]
    }
  }, [_c("option", {
    attrs: {
      value: "C1"
    }
  }, [_vm._v("C1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "C2"
    }
  }, [_vm._v("C2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "C3"
    }
  }, [_vm._v("C3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "L1"
    }
  }, [_vm._v("L1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "L2"
    }
  }, [_vm._v("L2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "L3"
    }
  }, [_vm._v("L3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "L4"
    }
  }, [_vm._v("L4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "L5"
    }
  }, [_vm._v("L5")])])]), _vm._v(" "), _c("p", [_vm._v("Trạng thái")]), _vm._v(" "), _c("p", {
    staticClass: "mb-1"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_status,
      expression: "tmp_status"
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
        _vm.tmp_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.openConfirmChangeStatus]
    }
  }, [_vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("0. KH mới")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("1. KH không liên lạc được")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "20"
    }
  }, [_vm._v("2. KH ở vùng CMS không có cơ sở")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "30"
    }
  }, [_vm._v("3. KH không nghe máy")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "40"
    }
  }, [_vm._v("4. KH hẹn gọi lại sau")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "50"
    }
  }, [_vm._v("5. KH không quan tâm")]) : _vm._e(), _vm._v(" "), _vm.tmp_status < 70 ? _c("option", {
    attrs: {
      value: "60"
    }
  }, [_vm._v("6. KH không tiềm năng")]) : _vm._e(), _vm._v(" "), _c("option", {
    attrs: {
      value: "71"
    }
  }, [_vm._v("7.1. KH quan tâm, cần follow up date")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "72"
    }
  }, [_vm._v("7.2. KH tiềm năng nhưng không muốn làm phiền")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "73"
    }
  }, [_vm._v("7.3. KH đồng ý đặt lịch Checkin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "81"
    }
  }, [_vm._v("8.1. KH đã đến checkin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "82"
    }
  }, [_vm._v("8.2. KH đã mua gói phí")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "83"
    }
  }, [_vm._v("8.3. KH đến hạn tái tục")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "90"
    }
  }, [_vm._v("9. Danh sách đen")])])]), _vm._v(" "), _c("p", [_vm._v("Người phụ trách")]), _vm._v(" "), _c("p", {
    staticClass: "mb-1"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tmp_owner_id,
      expression: "tmp_owner_id"
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
        _vm.tmp_owner_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.openConfirmAssgin]
    }
  }, _vm._l(_vm.users_manager, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.label_name))]);
  }), 0)])])])]), _vm._v(" "), _vm.phone.show ? _c("vx-card", {
    staticClass: "mb-base",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("div", {
    staticClass: "alert alert-secondary",
    attrs: {
      role: "alert"
    }
  }, [_c("h5", {
    staticClass: "alert-heading"
  }, [_c("i", {
    staticClass: "fa fa-phone",
    staticStyle: {
      "margin-right": "10px"
    }
  }), _vm._v(" " + _vm._s(_vm.phone.title))]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.phone.description)
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    attrs: {
      "for": "nf-email"
    }
  }, [_vm._v("Trạng thái cuộc gọi "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone.select_note_status,
      expression: "phone.select_note_status"
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
        _vm.$set(_vm.phone, "select_note_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn trạng thái")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Thuê bao - Tắt máy - Sai số")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Location")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Máy bận - Không nghe máy")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("KH hẹn gọi lại sau")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("KH Từ chối nói chuyện")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("KH không phù hợp")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "7"
    }
  }, [_vm._v("KH tiềm năng")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "9"
    }
  }, [_vm._v("Blacklist")])])]), _vm._v(" "), ["5", "6", "7"].indexOf(_vm.phone.select_note_status) > -1 ? _c("div", {
    staticClass: "mt-3"
  }, [_c("label", [_vm._v("Chi tiết trạng thái cuộc gọi "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone.select_note_status_sub,
      expression: "phone.select_note_status_sub"
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
        _vm.$set(_vm.phone, "select_note_status_sub", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn chi tiết trạng thái")]), _vm._v(" "), _vm.phone.select_note_status == 5 ? _c("option", {
    attrs: {
      value: "51"
    }
  }, [_vm._v("KH đã từng sử dụng dịch vụ")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 5 ? _c("option", {
    attrs: {
      value: "52"
    }
  }, [_vm._v("KH không quan tâm")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 5 ? _c("option", {
    attrs: {
      value: "53"
    }
  }, [_vm._v("KH thực sự không muốn nói chuyện")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 6 ? _c("option", {
    attrs: {
      value: "61"
    }
  }, [_vm._v("Không có con")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 6 ? _c("option", {
    attrs: {
      value: "62"
    }
  }, [_vm._v("Lý do khác")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 7 ? _c("option", {
    attrs: {
      value: "71"
    }
  }, [_vm._v("KH đang cân nhắc")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 7 ? _c("option", {
    attrs: {
      value: "72"
    }
  }, [_vm._v("KH hẹn thời gian khác")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 7 ? _c("option", {
    attrs: {
      value: "73"
    }
  }, [_vm._v("KH ko muốn làm phiền")]) : _vm._e(), _vm._v(" "), _vm.phone.select_note_status == 7 ? _c("option", {
    attrs: {
      value: "74"
    }
  }, [_vm._v("Confirm 1")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", [_vm._v("Ghi chú cuộc gọi"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone.note,
      expression: "phone.note"
    }],
    staticClass: "vs-inputx vs-input--input normal mt-2",
    attrs: {
      placeholder: "Thêm ghi chú cuộc gọi"
    },
    domProps: {
      value: _vm.phone.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.phone, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5 mr-4 ml-4",
    attrs: {
      active: _vm.phone.alert.active,
      color: _vm.phone.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.phone.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.phone.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-3",
    staticStyle: {
      "text-align": "right"
    }
  }, [_c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.updateNotePhone
    }
  }, [_c("i", {
    staticClass: "fa fa-paper-plane"
  }), _vm._v(" Lưu")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "dark"
    },
    on: {
      click: function click($event) {
        _vm.phone.show = false;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  }), _vm._v(" Hủy")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _vm.sms.show ? _c("vx-card", {
    staticClass: "mb-base",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("div", {
    staticClass: "alert alert-secondary",
    attrs: {
      role: "alert"
    }
  }, [_c("h5", {
    staticClass: "alert-heading"
  }, [_c("i", {
    staticClass: "fa fa-sms",
    staticStyle: {
      "margin-right": "10px"
    }
  }), _vm._v(" " + _vm._s(_vm.sms.title))]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sms.content,
      expression: "sms.content"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      placeholder: "Nhập nội dung tin nhắn"
    },
    domProps: {
      value: _vm.sms.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sms, "content", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-top": "5px",
      "text-align": "right"
    }
  }, [_c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.sendSms
    }
  }, [_c("i", {
    staticClass: "fa fa-paper-plane"
  }), _vm._v(" Gửi")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "dark"
    },
    on: {
      click: function click($event) {
        _vm.sms.show = false;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  }), _vm._v(" Hủy")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c("vx-card", {
    staticClass: "mt-5",
    attrs: {
      "no-shadow": ""
    }
  }, [_c("vs-tabs", {
    model: {
      value: _vm.active_tab,
      callback: function callback($$v) {
        _vm.active_tab = $$v;
      },
      expression: "active_tab"
    }
  }, [_c("vs-tab", {
    attrs: {
      label: "Thông tin"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab();
      }
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-first"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/3 w-full mb-4"
  }, [_c("label", [_vm._v("Danh xưng "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.gender,
      expression: "parent.gender"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      disabled: _vm.disabled_edit
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.parent, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "M"
    }
  }, [_vm._v("Ông")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "F"
    }
  }, [_vm._v("Bà")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-2/3 w-full mb-4"
  }, [_c("label", [_vm._v("Họ tên "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.name,
      expression: "parent.name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Điện thoại "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.mobile_1,
      expression: "parent.mobile_1"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.mobile_1
    },
    on: {
      change: _vm.validatePhone,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "mobile_1", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Điện thoại 2")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.mobile_2,
      expression: "parent.mobile_2"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.mobile_2
    },
    on: {
      change: _vm.validatePhone2,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "mobile_2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.email,
      expression: "parent.email"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày sinh ")]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full",
    attrs: {
      placeholder: "Chọn ngày sinh nhật",
      lang: _vm.datepickerOptions.lang,
      disabled: _vm.disabled_edit
    },
    on: {
      change: _vm.selectDateParent
    },
    model: {
      value: _vm.parent.birthday,
      callback: function callback($$v) {
        _vm.$set(_vm.parent, "birthday", $$v);
      },
      expression: "parent.birthday"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Nghề nghiệp")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "title",
      placeholder: "Chọn nghề nghiệp",
      options: _vm.html.jobs.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.disabled_edit
    },
    on: {
      input: _vm.saveJob
    },
    model: {
      value: _vm.parent_input.job,
      callback: function callback($$v) {
        _vm.$set(_vm.parent_input, "job", $$v);
      },
      expression: "parent_input.job"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.note,
      expression: "parent.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "note", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full item-last"
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Tỉnh Thành Phố")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      naem: "input_province",
      label: "name",
      placeholder: "Chọn Tỉnh/Thành Phố",
      options: _vm.html.province.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.disabled_edit
    },
    on: {
      input: _vm.getDistrict
    },
    model: {
      value: _vm.parent_input.province,
      callback: function callback($$v) {
        _vm.$set(_vm.parent_input, "province", $$v);
      },
      expression: "parent_input.province"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Quận huyện")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      naem: "input_district",
      label: "name",
      placeholder: "Chọn Quận/Huyện/Thị Xã",
      options: _vm.html.district.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.disabled_edit
    },
    on: {
      input: _vm.saveDistrict
    },
    model: {
      value: _vm.parent_input.district,
      callback: function callback($$v) {
        _vm.$set(_vm.parent_input, "district", $$v);
      },
      expression: "parent_input.district"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Nguồn  "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" (*)")])]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn nguồn",
      options: _vm.html.source.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.disabled_edit
    },
    on: {
      input: _vm.saveSource
    },
    model: {
      value: _vm.parent_input.source,
      callback: function callback($$v) {
        _vm.$set(_vm.parent_input, "source", $$v);
      },
      expression: "parent_input.source"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Nguồn chi tiết")]), _vm._v(" "), _c("vue-select", {
    attrs: {
      label: "name",
      placeholder: "Chọn nguồn chi tiết",
      options: _vm.html.source_detail.list,
      searchable: true,
      language: "tv-VN",
      disabled: _vm.disabled_edit
    },
    on: {
      input: _vm.saveSourceDetail
    },
    model: {
      value: _vm.parent_input.source_detail,
      callback: function callback($$v) {
        _vm.$set(_vm.parent_input, "source_detail", $$v);
      },
      expression: "parent_input.source_detail"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Người giới thiệu (ĐT)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.parent.c2c_mobile,
      expression: "parent.c2c_mobile"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text",
      name: "title",
      disabled: _vm.disabled_edit
    },
    domProps: {
      value: _vm.parent.c2c_mobile
    },
    on: {
      change: _vm.validatePhoneC2C,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.parent, "c2c_mobile", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("p", [_c("i", [_vm._v(_vm._s(_vm.c2c_info))])])])])]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5 mr-4 ml-4",
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
    staticClass: "vx-col w-full"
  }, [_vm.disabled_edit == true ? _c("vs-button", {
    staticClass: "mb-2",
    on: {
      click: function click($event) {
        _vm.disabled_edit = false;
      }
    }
  }, [_vm._v("Cập nhật thông tin")]) : _vm._e(), _vm._v(" "), _vm.disabled_edit == false ? _c("vs-button", {
    staticClass: "mb-2 mr-3",
    attrs: {
      color: "dark"
    },
    on: {
      click: _vm.reloadPage
    }
  }, [_vm._v("Hủy")]) : _vm._e(), _vm._v(" "), _vm.disabled_edit == false ? _c("vs-button", {
    staticClass: "mb-2",
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.saveInfo
    }
  }, [_vm._v("Lưu")]) : _vm._e()], 1)], 1)])]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Ticket (" + _vm.total_unsuccess + ")"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab();
      }
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("vs-button", {
    staticClass: "mt-3 mb-2",
    attrs: {
      disabled: _vm.disabled_action,
      color: "success"
    },
    on: {
      click: _vm.showModalTicket
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Thêm mới Ticket")]), _vm._v(" "), _c("div", {
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
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Thời gian tạo")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Loại")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Nội dung")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Trạng thái")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Ghi chú xử lý")])])]), _vm._v(" "), _vm._l(_vm.tickets, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(item.created_at))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(_vm._f("genTypeTicket")(item.type)))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td",
      staticStyle: {
        "max-width": "284px"
      }
    }, [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.status,
        expression: "item.status"
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
          _vm.$set(item, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.updateTicket(item);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "1"
      }
    }, [_vm._v("Mới tạo")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "2"
      }
    }, [_vm._v("Đã tiếp nhận")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "3"
      }
    }, [_vm._v("Chờ xử lý")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "4"
      }
    }, [_vm._v("Hoàn thành")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "5"
      }
    }, [_vm._v("Hủy")])])]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.note,
        expression: "item.note"
      }],
      staticClass: "vs-inputx vs-input--input normal",
      domProps: {
        value: item.note
      },
      on: {
        change: function change($event) {
          return _vm.updateTicket(item);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "note", $event.target.value);
        }
      }
    })])]);
  })], 2)])])])], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Chăm sóc"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab();
      }
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("vs-button", {
    staticClass: "mt-3 mb-2",
    attrs: {
      disabled: _vm.disabled_action,
      color: "success"
    },
    on: {
      click: _vm.showModalCare
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Thêm mới chăm sóc")]), _vm._v(" "), _c("div", {
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
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Thời gian")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Phụ trách")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Phương thức")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Trạng thái cuộc gọi")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_vm._v("Chi tiết")])])]), _vm._v(" "), _vm._l(_vm.cares, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(item.care_date))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.creator_name))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(item.method_name) + _vm._s(item.type_call ? " - " + item.type_call : ""))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td text-center"
    }, [_vm._v(_vm._s(item.call_status_label))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [item.link_record ? _c("p", [_c("audio", {
      staticStyle: {
        height: "40px",
        width: "256px",
        border: "1px solid #ccc"
      },
      attrs: {
        controls: ""
      }
    }, [_c("source", {
      attrs: {
        src: item.link_record,
        type: "audio/x-wav"
      }
    })])]) : _vm._e(), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(item.note)
      }
    }), _vm._v(" "), item.attached_file ? _c("p", [_c("a", {
      attrs: {
        href: item.attached_file,
        target: "blank"
      }
    }, [_vm._v("File đính kèm")])]) : _vm._e()])]);
  })], 2)])])])], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Học sinh"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab();
      }
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("vs-button", {
    staticClass: "mt-3 mb-3",
    attrs: {
      disabled: _vm.disabled_action,
      color: "success"
    },
    on: {
      click: function click($event) {
        return _vm.showModalStudent(0);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Thêm mới học sinh")]), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, _vm._l(_vm.students, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-col md:w-1/3 w-full item-first"
    }, [_c("vx-card", {
      staticClass: "mb-base"
    }, [_c("div", {
      staticClass: "card-header list-action"
    }, [_c("strong", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("vs-button", {
      staticClass: "small",
      attrs: {
        disabled: _vm.disabled_action,
        color: "success"
      },
      on: {
        click: function click($event) {
          return _vm.showModalStudent(item);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-edit"
    })]), _vm._v(" "), item.status == 0 ? _c("vs-button", {
      staticClass: "small",
      attrs: {
        disabled: _vm.disabled_action,
        color: "danger"
      },
      on: {
        click: function click($event) {
          return _vm.showModalCheckin(item);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-location-arrow"
    })]) : _vm._e(), _vm._v(" "), _c("router-link", {
      attrs: {
        to: "/lms/students/".concat(item.lms_id, "/detail"),
        target: "_blank"
      }
    }, [item.status == 3 ? _c("vs-button", {
      staticClass: "small"
    }, [_c("i", {
      staticClass: "fa fa-eye"
    })]) : _vm._e()], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("p", [_vm._v("Ngày sinh: " + _vm._s(item.birthday))]), _vm._v(" "), _c("p", [_vm._v("Giới tính: " + _vm._s(_vm._f("genTextGender")(item.gender)))]), _vm._v(" "), _c("p", [_vm._v("Ghi chú: " + _vm._s(item.note))]), _vm._v(" "), _c("p", [_vm._v("Ngày tạo: " + _vm._s(item.created_at))]), _vm._v(" "), _c("p", [_vm._v("Người tạo: " + _vm._s(item.creator_name))]), _vm._v(" "), _c("p", [_vm._v("Trạng thái: "), _c("b", [_vm._v(_vm._s(_vm._f("genStudentStatus")(item.status)))])]), _vm._v(" "), item.status > 0 ? _c("p", [_vm._v("Trung tâm checkin: " + _vm._s(item.checkin_branch_name))]) : _vm._e(), _vm._v(" "), item.status > 0 ? _c("p", [_vm._v("Thời gian checkin: " + _vm._s(item.checkin_at))]) : _vm._e(), _vm._v(" "), item.status > 0 ? _c("p", [_vm._v("Khóa học: " + _vm._s(item.checkin_product_name))]) : _vm._e(), _vm._v(" "), item.status == 1 ? _c("p", {
      staticClass: "list-action"
    }, [_vm._v("Cập nhật checkin: \n                      "), item.status == 1 ? _c("vs-button", {
      staticClass: "small",
      attrs: {
        disabled: _vm.disabled_action
      },
      on: {
        click: function click($event) {
          return _vm.showModalUpdateCheckin(item);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-edit"
    })]) : _vm._e()], 1) : _vm._e()])])], 1);
  }), 0)], 1)]), _vm._v(" "), _c("vs-tab", {
    attrs: {
      label: "Lịch sử cập nhật"
    },
    on: {
      click: function click($event) {
        return _vm.changeTab();
      }
    }
  }, [_c("div", {
    staticClass: "tab-text"
  }, [_c("div", {
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
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_c("div", {
    staticClass: "vs-table-text text-center"
  }, [_vm._v("Thời gian\n                            ")])]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_c("div", {
    staticClass: "vs-table-text"
  }, [_vm._v("Nội dung\n                            ")])]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "1",
      rowspan: "1"
    }
  }, [_c("div", {
    staticClass: "vs-table-text"
  }, [_vm._v("Người thực hiện\n                            ")])])])]), _vm._v(" "), _vm._l(_vm.logs, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "tr-values vs-table--tr tr-table-state-null"
    }, [_c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.created_at))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c("td", {
      staticClass: "td vs-table--td"
    }, [_vm._v(_vm._s(item.creator_name))])]);
  })], 2)])])])])])], 1)], 1), _vm._v(" "), _c("vs-popup", {
    "class": "modal_" + _vm.modal_care.color,
    attrs: {
      title: _vm.modal_care.title,
      active: _vm.modal_care.show
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_care, "show", $event);
      }
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Phương thức")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.care.method_id,
      expression: "care.method_id"
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
        _vm.$set(_vm.care, "method_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn phương thức")]), _vm._v(" "), _vm._l(_vm.methods, function (method, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: method.id
      }
    }, [_vm._v(_vm._s(method.name))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("File đính kèm")]), _vm._v(" "), _c("input", {
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "file",
      id: "fileUploadExcel"
    },
    on: {
      change: _vm.fileChanged
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.care.note,
      expression: "care.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    domProps: {
      value: _vm.care.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.care, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5 mr-4 ml-4",
    attrs: {
      active: _vm.modal_care.alert.active,
      color: _vm.modal_care.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_care.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.modal_care.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "dark",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.modal_care.show = false;
      }
    }
  }, [_vm._v("Hủy")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.addCare
    }
  }, [_vm._v("Lưu")])], 1)], 1)]), _vm._v(" "), _c("vs-popup", {
    "class": "modal_" + _vm.modal_student.color,
    attrs: {
      title: _vm.modal_student.title,
      active: _vm.modal_student.show
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_student, "show", $event);
      }
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Họ tên học sinh")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.name,
      expression: "student.name"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.student.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày sinh")]), _vm._v(" "), _c("datepicker", {
    staticClass: "w-full calendar",
    attrs: {
      placeholder: "Chọn ngày sinh nhật",
      lang: _vm.datepickerOptions.lang
    },
    on: {
      change: _vm.selectDate
    },
    model: {
      value: _vm.student.birthday,
      callback: function callback($$v) {
        _vm.$set(_vm.student, "birthday", $$v);
      },
      expression: "student.birthday"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Giới tính")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.gender,
      expression: "student.gender"
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
        _vm.$set(_vm.student, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "M"
    }
  }, [_vm._v("Nam")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "F"
    }
  }, [_vm._v("Nữ")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Ghi chú")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.note,
      expression: "student.note"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    domProps: {
      value: _vm.student.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5",
    attrs: {
      active: _vm.modal_student.alert.active,
      color: _vm.modal_student.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_student.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.modal_student.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "dark",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.modal_student.show = false;
      }
    }
  }, [_vm._v("Hủy")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.addStudent
    }
  }, [_vm._v("Lưu")])], 1)], 1)]), _vm._v(" "), _c("vs-popup", {
    "class": "modal_" + _vm.modal_checkin.color,
    attrs: {
      title: _vm.modal_checkin.title,
      active: _vm.modal_checkin.show
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_checkin, "show", $event);
      }
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Trung tâm checkin")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_checkin.branch_id,
      expression: "modal_checkin.branch_id"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      disabled: _vm.modal_checkin.disabled
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.modal_checkin, "branch_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn trung tâm")]), _vm._v(" "), _vm._l(_vm.branches, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.name))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Ngày/Giờ Checkin")]), _vm._v(" "), _c("datepicker", {
    staticClass: "form-control calendar",
    attrs: {
      id: "checkin-at",
      value: _vm.modal_checkin.checkin_at,
      placeholder: "Chọn ngày giờ",
      lang: _vm.datepickerOptions.lang,
      type: "datetime",
      format: "YYYY-MM-DD HH:mm"
    },
    model: {
      value: _vm.modal_checkin.checkin_at,
      callback: function callback($$v) {
        _vm.$set(_vm.modal_checkin, "checkin_at", $$v);
      },
      expression: "modal_checkin.checkin_at"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col md:w-1/2 w-full mb-4"
  }, [_c("label", [_vm._v("Khóa học")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modal_checkin.type_product,
      expression: "modal_checkin.type_product"
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
        _vm.$set(_vm.modal_checkin, "type_product", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn khóa học")]), _vm._v(" "), _vm._l(_vm.products, function (product, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: product.id
      }
    }, [_vm._v(_vm._s(product.name))]);
  })], 2)]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5 mr-4 ml-4",
    attrs: {
      active: _vm.modal_checkin.alert.active,
      color: _vm.modal_checkin.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_checkin.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.modal_checkin.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "dark",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.modal_checkin.show = false;
      }
    }
  }, [_vm._v("Hủy")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.checkin
    }
  }, [_vm._v("Lưu")])], 1)], 1)]), _vm._v(" "), _c("vs-popup", {
    "class": "modal_" + _vm.modal_ticket.color,
    attrs: {
      title: _vm.modal_ticket.title,
      active: _vm.modal_ticket.show
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_ticket, "show", $event);
      }
    }
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Loại Ticket")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ticket.type,
      expression: "ticket.type"
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
        _vm.$set(_vm.ticket, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Chọn loại")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Yêu cầu dịch vụ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Yêu cầu hỗ trợ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Khiếu lại")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Báo lỗi")])])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full mb-4"
  }, [_c("label", [_vm._v("Nội dung")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ticket.description,
      expression: "ticket.description"
    }],
    staticClass: "vs-inputx vs-input--input normal",
    attrs: {
      rows: "8"
    },
    domProps: {
      value: _vm.ticket.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.ticket, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("vs-alert", {
    staticClass: "mb-5 mr-4 ml-4",
    attrs: {
      active: _vm.modal_ticket.alert.active,
      color: _vm.modal_ticket.alert.color,
      closable: "",
      "icon-pack": "feather",
      "close-icon": "icon-x"
    },
    on: {
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.modal_ticket.alert, "active", $event);
      }
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.modal_ticket.alert.body)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-button", {
    staticClass: "mr-3",
    attrs: {
      color: "dark",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.modal_ticket.show = false;
      }
    }
  }, [_vm._v("Hủy")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "success"
    },
    on: {
      click: _vm.addTicket
    }
  }, [_vm._v("Lưu")])], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/images/common/avatar-default.jpg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/common/avatar-default.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-default.jpg?22dbc0f5e5f5648613f0d1de3ea7ae0a";

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

/***/ "./resources/js/src/views/crm/parents/detail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/crm/parents/detail.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=d442461c */ "./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c");
/* harmony import */ var _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js */ "./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/crm/parents/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/crm/parents/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=d442461c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/crm/parents/detail.vue?vue&type=template&id=d442461c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_d442461c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);