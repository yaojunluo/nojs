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



//这是action
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
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(action || "操作成功");

      return state;

    case 'error':
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(action || "操作成功");

      return state;

    case 'warning':
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning(action || "操作成功");

      return state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.e1069202af36c65734ef.hot-update.js.map