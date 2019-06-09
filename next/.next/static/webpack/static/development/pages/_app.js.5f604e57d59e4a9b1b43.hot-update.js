webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);


var logindata = {
  auth: false,
  user: {}
};

var success = function success(e) {
  console.log(e.value);

  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a[e.type](e.value);
};

var error = function error() {
  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('This is a message of error');
};

var warning = function warning() {
  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning('This is message of warning');
}; //这是action
// const togglelogin = {
//   type: 'toggleAuth'
// }
//这是reducer


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : logindata;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'toggleAuth':
      var user = action.user;
      console.log(action);
      return state = {
        auth: true,
        user: user
      };

    case 'loginOut':
      return state = {
        auth: false,
        user: {}
      };

    case 'success':
      console.log(action);
      success(action);
      return state;

    case 'error':
      success(action);
      return state;

    case 'warning':
      success(action);
      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.5f604e57d59e4a9b1b43.hot-update.js.map