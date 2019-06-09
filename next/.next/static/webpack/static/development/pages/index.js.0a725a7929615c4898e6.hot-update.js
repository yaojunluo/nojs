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













var _jsxFileName = "D:\\nojspro\\nojs\\next\\components\\home\\blog.js";




var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_12___default.a, {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), text);
};

function sortTweet(value) {
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
      data: [{
        href: 'http://ant.design',
        title: "ant design part",
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }, {
        href: 'http://ant.design',
        title: "ant design part ant design part ant design part",
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 24,
        md: 24,
        lg: 16,
        xl: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
        itemLayout: "vertical",
        dataSource: this.state.data // footer={
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
              text: "156",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "like-o",
              text: "156",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(IconText, {
              type: "message",
              text: "2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            })],
            extra: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
              width: 272,
              alt: "logo",
              src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
              className: "jsx-1784965332",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item.Meta, {
            title: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
              href: item.href,
              style: {
                fontSize: '24px'
              },
              className: "jsx-1784965332",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }, item.title),
            description: '前端 React' + '  2019-6-9 14:00:31',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
            className: "jsx-1784965332",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, sortTweet(item.content)));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
          lineNumber: 79
        },
        __self: this
      }, "Col"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "1784965332",
        __self: this
      }, ".ant-list-item-main.jsx-1784965332{position:relative;}.ant-list-item-action.jsx-1784965332{position:absolute;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2pzcHJvXFxub2pzXFxuZXh0XFxjb21wb25lbnRzXFxob21lXFxibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Gd0IsQUFHK0MsQUFJQSxrQkFGdEIsQUFHYSxTQUNiIiwiZmlsZSI6IkQ6XFxub2pzcHJvXFxub2pzXFxuZXh0XFxjb21wb25lbnRzXFxob21lXFxibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgQXZhdGFyLCBJY29uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5cclxuY29uc3QgSWNvblRleHQgPSAoeyB0eXBlLCB0ZXh0IH0pID0+IChcclxuICAgIDxzcGFuPlxyXG4gICAgICAgIDxJY29uIHR5cGU9e3R5cGV9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4IH19IC8+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICA8L3NwYW4+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBzb3J0VHdlZXQodmFsdWUpe1xyXG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLDYwKSArICcuLi4nXHJcbn1cclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydGAsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4nLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCBhbnQgZGVzaWduIHBhcnQgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTV9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17MjR9IG1kPXsyNH0gbGc9ezE2fSB4bD17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9vdGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGI+YW50IGRlc2lnbjwvYj4gZm9vdGVyIHBhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCB0eXBlPVwic3Rhci1vXCIgdGV4dD1cIjE1NlwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgdHlwZT1cImxpa2Utb1wiIHRleHQ9XCIxNTZcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IHR5cGU9XCJtZXNzYWdlXCIgdGV4dD1cIjJcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL21xYVFzd2N5RExjWHlES25aZkVTLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfSBzdHlsZT17e2ZvbnRTaXplOicyNHB4J319PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsn5YmN56uvIFJlYWN0JysgJyAgMjAxOS02LTkgMTQ6MDA6MzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvcnRUd2VldChpdGVtLmNvbnRlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXsyNH0gbGc9ezh9IHhsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICBDb2xcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFudC1saXN0LWl0ZW0tbWFpbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFudC1saXN0LWl0ZW0tYWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JvdyA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbi8v6ZyA6KaB6Kem5Y+R5LuA5LmI6KGM5Li6XHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBUb2dnbGVMb2dpbjogKHVzZXIpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUF1dGgnLCB1c2VyIH0pLFxyXG4gICAgICAgIExvZ2luT3V0OiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbk91dCcgfSksXHJcbiAgICAgICAgTm90aWNlU3Vzc2VzczogKHZhbHVlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgdmFsdWUgfSksXHJcbiAgICAgICAgTm90aWNlRXJyb3I6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCB2YWx1ZSB9KSxcclxuICAgICAgICBOb3RpY2VXYXJuaW5nOiAodmFsdWUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3dhcm5pbmcnLCB2YWx1ZSB9KSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQmxvZyk7Il19 */\n/*@ sourceURL=D:\\nojspro\\nojs\\next\\components\\home\\blog.js */"));
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
//# sourceMappingURL=index.js.0a725a7929615c4898e6.hot-update.js.map