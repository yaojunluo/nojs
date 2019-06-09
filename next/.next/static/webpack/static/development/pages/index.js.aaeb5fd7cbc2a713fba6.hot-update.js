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
  data.replace(/<br>/g, "/");
  return data.substring(0, 60) + '...';
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
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 24,
        md: 24,
        lg: 16,
        xl: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
        itemLayout: "vertical",
        dataSource: this.state.data,
        header: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "jsx-750656228" + " " + "header_list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: "jsx-750656228",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "\u6700\u65B0"), "|", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          type: "link",
          className: "jsx-750656228",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
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
                lineNumber: 67
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "like-o",
              text: item.awesime,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "message",
              text: item.comment,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
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
                lineNumber: 72
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
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
                lineNumber: 80
              },
              __self: this
            }, item.title),
            description: '前端 React' + '  2019-6-9 14:00:31',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: sortTweet(item.text)
            },
            className: "jsx-750656228",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 91
        },
        __self: this
      }, "Col"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "750656228",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2pzcHJvXFxub2pzXFxuZXh0XFxjb21wb25lbnRzXFxob21lXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGb0IiLCJmaWxlIjoiRDpcXG5vanNwcm9cXG5vanNcXG5leHRcXGNvbXBvbmVudHNcXGhvbWVcXGJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBBdmF0YXIsIEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL2FwcC5jc3MnXHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIT1NUIGZyb20gJy4uLy4uL2NvbmZpZy9ob3N0J1xyXG5cclxuY29uc3QgaG9zdCA9IEhPU1QuaG9zdDtcclxuXHJcbmNvbnN0IEljb25UZXh0ID0gKHsgdHlwZSwgdGV4dCB9KSA9PiAoXHJcbiAgICA8c3Bhbj5cclxuICAgICAgICA8SWNvbiB0eXBlPXt0eXBlfSBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fSAvPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgPC9zcGFuPlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc29ydFR3ZWV0KHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5pbmRleE9mKCc8cD4nKSwgdmFsdWUuaW5kZXhPZignPC9wPicpKVxyXG4gICAgbGV0IGRhdGEgPSB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignPHA+JykrMywgdmFsdWUuaW5kZXhPZignPC9wPicpKVxyXG4gICAgZGF0YS5yZXBsYWNlKC88YnI+L2csXCIvXCIpXHJcbiAgICByZXR1cm4gZGF0YS5zdWJzdHJpbmcoMCwgNjApICsgJy4uLidcclxufVxyXG5cclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgQXhpb3MuZ2V0KGhvc3QrJy9wdWJsaWMvbmV3JykudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob3RpY2VTdXNzZXNzKCfliqDovb3miJDlip8nKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm90aWNlRXJyb3IoJ+acjeWKoeWZqOmUmeivrycpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE1fSBjbGFzc05hbWU9XCJibG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsyNH0gbWQ9ezI0fSBsZz17MTZ9IHhsPXsyMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuacgOaWsDwvYT58XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0eXBlPVwibGlua1wiPueDremXqDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9vdGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGI+YW50IGRlc2lnbjwvYj4gZm9vdGVyIHBhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCB0eXBlPVwic3Rhci1vXCIgdGV4dD17aXRlbS5jb2xsZWN0fSAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IHR5cGU9XCJsaWtlLW9cIiB0ZXh0PXtpdGVtLmF3ZXNpbWV9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgdHlwZT1cIm1lc3NhZ2VcIiB0ZXh0PXtpdGVtLmNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjcyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXsnL2NvbnRlbnQvJytpdGVtLl9pZH0gc3R5bGU9e3sgZm9udFNpemU6ICcyNHB4JyB9fT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17J+WJjeerryBSZWFjdCcgKyAnICAyMDE5LTYtOSAxNDowMDozMSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzb3J0VHdlZXQoaXRlbS50ZXh0KX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzb3J0VHdlZXQoaXRlbS50ZXh0KSB9fSAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IHNtPXsyNH0gbWQ9ezI0fSBsZz17OH0geGw9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIENvbFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JvdyA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbi8v6ZyA6KaB6Kem5Y+R5LuA5LmI6KGM5Li6XHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBUb2dnbGVMb2dpbjogKHVzZXIpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUF1dGgnLCB1c2VyIH0pLFxyXG4gICAgICAgIExvZ2luT3V0OiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbk91dCcgfSksXHJcbiAgICAgICAgTm90aWNlU3Vzc2VzczogKHZhbHVlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgdmFsdWUgfSksXHJcbiAgICAgICAgTm90aWNlRXJyb3I6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCB2YWx1ZSB9KSxcclxuICAgICAgICBOb3RpY2VXYXJuaW5nOiAodmFsdWUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3dhcm5pbmcnLCB2YWx1ZSB9KSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQmxvZyk7Il19 */\n/*@ sourceURL=D:\\nojspro\\nojs\\next\\components\\home\\blog.js */"));
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
//# sourceMappingURL=index.js.aaeb5fd7cbc2a713fba6.hot-update.js.map