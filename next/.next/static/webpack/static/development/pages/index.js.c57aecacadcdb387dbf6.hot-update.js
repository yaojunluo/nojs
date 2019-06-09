webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/blog.js":
/*!*********************************!*\
  !*** ./components/home/blog.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");









var _jsxFileName = "D:\\nojspro\\nojs\\next\\components\\home\\blog.js";


var listData = [];

for (var i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: "ant design part ".concat(i),
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), text);
};

var blog =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(blog, _Component);

  function blog(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, blog);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(blog).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 24,
        md: 24,
        lg: 16,
        xl: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["List"], {
        itemLayout: "vertical",
        size: "large",
        pagination: {
          onChange: function onChange(page) {
            console.log(page);
          },
          pageSize: 3
        },
        dataSource: listData,
        footer: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "ant design"), " footer part"),
        renderItem: function renderItem(item) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
            key: item.title,
            actions: [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(IconText, {
              type: "star-o",
              text: "156",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(IconText, {
              type: "like-o",
              text: "156",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(IconText, {
              type: "message",
              text: "2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            })],
            extra: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
              width: 272,
              alt: "logo",
              src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["List"].Item.Meta, {
            avatar: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Avatar"], {
              src: item.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }),
            title: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
              href: item.href,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }, item.title),
            description: item.description,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }), item.content);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 8,
        xl: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Col"));
    }
  }]);

  return blog;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function mapStateToProps(state) {
  return state;
} //需要触发什么行为


function mapDispatchToProps(dispatch) {
  return {
    ToggleLogin: function ToggleLogin(user) {
      return dispatch({
        type: 'toggleAuth',
        user: user
      });
    },
    LoginOut: function LoginOut() {
      return dispatch({
        type: 'loginOut'
      });
    },
    NoticeSussess: function NoticeSussess(value) {
      return dispatch({
        type: 'success',
        value: value
      });
    },
    NoticeError: function NoticeError(value) {
      return dispatch({
        type: 'error',
        value: value
      });
    },
    NoticeWarning: function NoticeWarning(value) {
      return dispatch({
        type: 'warning',
        value: value
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(blog));

/***/ })

})
//# sourceMappingURL=index.js.c57aecacadcdb387dbf6.hot-update.js.map