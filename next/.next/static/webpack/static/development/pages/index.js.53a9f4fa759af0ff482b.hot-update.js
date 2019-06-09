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
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list/style/css */ "./node_modules/antd/lib/list/style/css.js");
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _static_css_app_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/css/app.css */ "./static/css/app.css");
/* harmony import */ var _static_css_app_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_css_app_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_host__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../config/host */ "./config/host.js");













var _jsxFileName = "D:\\nojspro\\nojs\\next\\components\\home\\blog.js";






var host = _config_host__WEBPACK_IMPORTED_MODULE_18__["default"].host;

var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_12___default.a, {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), text);
};

function sortTweet(value) {
  console.log(value.indexOf('<p>'), value.indexOf('</p>'));
  var data = value.substring(value.indexOf('<p>') + 3, value.indexOf('</p>'));
  return value.substring(0, 60) + '...';
}

var Blog =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Blog, _Component);

  function Blog(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Blog);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Blog).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(host + '/public/new').then(function (res) {
        console.log(res);

        _this2.setState({
          data: res.data
        });

        _this2.props.NoticeSussess('加载成功');
      }).catch(function (err) {
        _this2.props.NoticeError('服务器错误');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 15,
        className: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 24,
        md: 24,
        lg: 16,
        xl: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
        itemLayout: "vertical",
        dataSource: this.state.data,
        header: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "jsx-750656228" + " " + "header_list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "jsx-750656228",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "\u6700\u65B0"), "|", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          type: "link",
          className: "jsx-750656228",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "\u70ED\u95E8")) // footer={
        //     <div>
        //         <b>ant design</b> footer part
        //     </div>
        // }
        ,
        renderItem: function renderItem(item) {
          return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
            key: item.title,
            actions: [react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "star-o",
              text: item.collect,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "like-o",
              text: item.awesime,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "message",
              text: item.comment,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            })],
            extra: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
              width: 272,
              alt: "logo",
              src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
              className: "jsx-750656228",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item.Meta, {
            title: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
              href: '/content/' + item._id,
              style: {
                fontSize: '24px'
              },
              className: "jsx-750656228",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            }, item.title),
            description: '前端 React' + '  2019-6-9 14:00:31',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
            className: "jsx-750656228",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
            dangerouslySetInnerHTML: {
              __html: sortTweet(item.text)
            },
            className: "jsx-750656228",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          })));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 8,
        xl: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Col"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "750656228",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2pzcHJvXFxub2pzXFxuZXh0XFxjb21wb25lbnRzXFxob21lXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IiLCJmaWxlIjoiRDpcXG5vanNwcm9cXG5vanNcXG5leHRcXGNvbXBvbmVudHNcXGhvbWVcXGJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBBdmF0YXIsIEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL2FwcC5jc3MnXHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIT1NUIGZyb20gJy4uLy4uL2NvbmZpZy9ob3N0J1xyXG5cclxuY29uc3QgaG9zdCA9IEhPU1QuaG9zdDtcclxuXHJcbmNvbnN0IEljb25UZXh0ID0gKHsgdHlwZSwgdGV4dCB9KSA9PiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAgICA8SWNvbiB0eXBlPXt0eXBlfSBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fSAvPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgPC9zcGFuPlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc29ydFR3ZWV0KHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5pbmRleE9mKCc8cD4nKSwgdmFsdWUuaW5kZXhPZignPC9wPicpKVxyXG4gICAgbGV0IGRhdGEgPSB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignPHA+JykrMywgdmFsdWUuaW5kZXhPZignPC9wPicpKVxyXG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCA2MCkgKyAnLi4uJ1xyXG59XHJcblxyXG5cclxuY2xhc3MgQmxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBBeGlvcy5nZXQoaG9zdCsnL3B1YmxpYy9uZXcnKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLk5vdGljZVN1c3Nlc3MoJ+WKoOi9veaIkOWKnycpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob3RpY2VFcnJvcign5pyN5Yqh5Zmo6ZSZ6K+vJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTV9IGNsYXNzTmFtZT1cImJsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezI0fSBtZD17MjR9IGxnPXsxNn0geGw9ezIwfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+5pyA5pawPC9hPnxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHR5cGU9XCJsaW5rXCI+54Ot6ZeoPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb290ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IHR5cGU9XCJzdGFyLW9cIiB0ZXh0PXtpdGVtLmNvbGxlY3R9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgdHlwZT1cImxpa2Utb1wiIHRleHQ9e2l0ZW0uYXdlc2ltZX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCB0eXBlPVwibWVzc2FnZVwiIHRleHQ9e2l0ZW0uY29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9eycvY29udGVudC8nK2l0ZW0uX2lkfSBzdHlsZT17eyBmb250U2l6ZTogJzI0cHgnIH19PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsn5YmN56uvIFJlYWN0JyArICcgIDIwMTktNi05IDE0OjAwOjMxJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3NvcnRUd2VldChpdGVtLnRleHQpfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzb3J0VHdlZXQoaXRlbS50ZXh0KSB9fSAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsyNH0gbGc9ezh9IHhsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICBDb2xcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9Sb3cgPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG4vL+mcgOimgeinpuWPkeS7gOS5iOihjOS4ulxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgVG9nZ2xlTG9naW46ICh1c2VyKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVBdXRoJywgdXNlciB9KSxcclxuICAgICAgICBMb2dpbk91dDogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5PdXQnIH0pLFxyXG4gICAgICAgIE5vdGljZVN1c3Nlc3M6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIHZhbHVlIH0pLFxyXG4gICAgICAgIE5vdGljZUVycm9yOiAodmFsdWUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgdmFsdWUgfSksXHJcbiAgICAgICAgTm90aWNlV2FybmluZzogKHZhbHVlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICd3YXJuaW5nJywgdmFsdWUgfSksXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJsb2cpOyJdfQ== */\n/*@ sourceURL=D:\\nojspro\\nojs\\next\\components\\home\\blog.js */"));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps)(Blog));

/***/ })

})
//# sourceMappingURL=index.js.53a9f4fa759af0ff482b.hot-update.js.map