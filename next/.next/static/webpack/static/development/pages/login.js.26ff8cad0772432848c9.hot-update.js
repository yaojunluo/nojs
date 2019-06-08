webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_host__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../config/host */ "./config/host.js");
/* harmony import */ var _static_css_app_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../static/css/app.css */ "./static/css/app.css");
/* harmony import */ var _static_css_app_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_css_app_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_29__);























var _jsxFileName = "D:\\nojspro\\next-antd\\pages\\login.js";







var host = _config_host__WEBPACK_IMPORTED_MODULE_26__["default"].host;

var login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_21__["default"])(login, _Component);

  function login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_16__["default"])(this, login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_18__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__["default"])(login).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "focusInput", function (e) {
      if (e === 0) {
        _this.setState({
          name: {
            bottom: 50,
            size: 12
          }
        });
      } else {
        _this.setState({
          password: {
            bottom: 50,
            size: 12
          }
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "blurInput", function (e) {
      var user = _this.state.user;

      if (e === 0 && user.username === '') {
        _this.setState({
          name: {
            bottom: 20,
            size: 16
          }
        });
      } else if (user.password === '') {
        _this.setState({
          password: {
            bottom: 20,
            size: 16
          }
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "changeInput", function (name, e) {
      console.log(name, e.target.value);
      var user = _this.state.user;
      user[name] = e.target.value;

      _this.setState({
        user: user
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "handleOk", function () {
      _this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true
      });

      setTimeout(function () {
        _this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "handleCancel", function () {
      console.log('Clicked cancel button');

      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "checkPassword", function (e) {
      var check = false;

      if (_this.state.register.password.length < 6) {
        return _this.setState({
          same: check,
          tip: '密码不能少于六位数'
        });
      }

      if (_this.state.register.password == e.target.value) {
        check = true;
      } else {
        check = false;
      }

      _this.setState({
        same: check,
        tip: '密码为空或不一致'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "onchangRegister", function (name, e) {
      var register = _this.state.register;
      register[name] = e.target.value;

      _this.setState({
        register: register
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__["default"])(_this), "loginSubmit", function (e) {
      var user = _this.state.user;

      if (user.username !== '' && user.password !== '') {
        axios__WEBPACK_IMPORTED_MODULE_29___default.a.post(host + '/login', user).then(function (res) {
          _this.props.ToggleLogin(res.data.user);

          localStorage.setItem('token', res.data.token);

          _this.setState({
            user: {
              username: '',
              password: ''
            }
          });

          next_router__WEBPACK_IMPORTED_MODULE_28___default.a.push('/');
        }).catch(function (err) {
          console.log(err);
        });
      }
    });

    _this.state = {
      name: {
        bottom: 20,
        size: 16
      },
      password: {
        bottom: 20,
        size: 16
      },
      user: {
        username: '',
        password: ''
      },
      register: {
        email: '',
        username: '',
        password: ''
      },
      visible: false,
      confirmLoading: false,
      same: false,
      tip: '密码为空或不一致'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_17__["default"])(login, [{
    key: "regHeader",
    value: function regHeader() {
      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "\u6CE8\u518C"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u521B\u5EFA\u4E00\u4E2A\u8D26\u53F7\u53BB\u52A0\u5165\u6211\u4EEC"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(host);
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state = this.state,
          visible = _this$state.visible,
          register = _this$state.register;
      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "center",
        align: "middle",
        className: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xs: 20,
        sm: 16,
        md: 14,
        lg: 12,
        xl: 7,
        style: {
          maxWidth: '400px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "login-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "login-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "login-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "LOGIN")), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "input-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("label", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "name-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "\u8D26\u53F7"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
        allowClear: true,
        value: this.state.user.username,
        onFocus: this.focusInput.bind(this, 0),
        onBlur: this.blurInput.bind(this, 0),
        onChange: this.changeInput.bind(this, 'username'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "input-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("label", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "pwd-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "\u5BC6\u7801"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a.Password, {
        onPressEnter: this.loginSubmit,
        value: this.state.user.password,
        onFocus: this.focusInput.bind(this, 1),
        onBlur: this.blurInput.bind(this, 1),
        onChange: this.changeInput.bind(this, 'password'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
        href: "#",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "forget-pwd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F")), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "login-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("button", {
        onClick: this.showModal,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "logon-btns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "\u6CE8\u518C"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("button", {
        onClick: this.loginSubmit,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a.dynamic([["1515203087", [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size]]]) + " " + "login-btns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "\u767B\u5F55"))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
        title: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(this.regHeader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }),
        visible: visible,
        footer: null,
        width: "400px",
        onCancel: this.handleCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onSubmit: this.handleSubmit,
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: '请输入您的邮箱'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "email",
        prefix: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "mail",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }),
        onChange: this.onchangRegister.bind(this, 'email'),
        placeholder: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, getFieldDecorator('username', {
        rules: [{
          required: true,
          message: '请输入您的用户名'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
        prefix: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }),
        onChange: this.onchangRegister.bind(this, 'username'),
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: '请输入您的密码'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a.Password, {
        placeholder: "password",
        onChange: this.onchangRegister.bind(this, 'password'),
        prefix: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, getFieldDecorator('check_password', {
        rules: [{
          required: true,
          message: '请再次输入您的密码'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_15___default.a, {
        prefix: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }),
        type: "password",
        onChange: this.checkPassword,
        placeholder: "Password",
        suffix: this.state.same ? '' : react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
          title: this.state.tip,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "info-circle",
          style: {
            color: 'rgba(0,0,0,.45)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "\u6CE8\u518C"))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_23___default.a, {
        id: "1515203087",
        dynamic: [this.state.name.bottom, this.state.name.size, this.state.password.bottom, this.state.password.size],
        __self: this
      }, ".input-box.__jsx-style-dynamic-selector .name-label.__jsx-style-dynamic-selector{position:absolute;bottom:".concat(this.state.name.bottom, "px;left:10px;z-index:10;font-size:").concat(this.state.name.size, "px;}.input-box.__jsx-style-dynamic-selector .pwd-label.__jsx-style-dynamic-selector{position:absolute;bottom:").concat(this.state.password.bottom, "px;left:10px;z-index:10;font-size:").concat(this.state.password.size, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2pzcHJvXFxuZXh0LWFudGRcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUXdCLEFBRytDLEFBT0Esa0JBTm9CLEFBT0Esc0NBTjVCLEFBT0EsVUFOQyxBQU9BLFdBTjhCLEFBT0EseUNBTjdDLEFBT0EiLCJmaWxlIjoiRDpcXG5vanNwcm9cXG5leHQtYW50ZFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIElucHV0LCBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJY29uLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEhPU1QgZnJvbSAnLi4vY29uZmlnL2hvc3QnXHJcbmltcG9ydCAnLi4vc3RhdGljL2Nzcy9hcHAuY3NzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaG9zdCA9IEhPU1QuaG9zdDtcclxuY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICAgICAgICAgIHNpemU6IDE2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDIwLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMTZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2FtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpcDogJ+WvhueggeS4uuepuuaIluS4jeS4gOiHtCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZm9jdXNJbnB1dCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJsdXJJbnB1dCA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoZSA9PT0gMCAmJiB1c2VyLnVzZXJuYW1lID09PSAnJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlci5wYXNzd29yZCA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUlucHV0ID0gKG5hbWUsIGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgbGV0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB1c2VyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIE1vZGFsVGV4dDogJ1RoZSBtb2RhbCB3aWxsIGJlIGNsb3NlZCBhZnRlciB0d28gc2Vjb25kcycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIGNhbmNlbCBidXR0b24nKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlZ0hlYWRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPuazqOWGjDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICDliJvlu7rkuIDkuKrotKblj7fljrvliqDlhaXmiJHku6xcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNoZWNrUGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWdpc3Rlci5wYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNhbWU6IGNoZWNrLFxyXG4gICAgICAgICAgICAgICAgdGlwOiAn5a+G56CB5LiN6IO95bCR5LqO5YWt5L2N5pWwJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWdpc3Rlci5wYXNzd29yZCA9PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNhbWU6IGNoZWNrLFxyXG4gICAgICAgICAgICB0aXA6ICflr4bnoIHkuLrnqbrmiJbkuI3kuIDoh7QnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbmNoYW5nUmVnaXN0ZXIgPSAobmFtZSwgZSkgPT4ge1xyXG4gICAgICAgIGxldCB7IHJlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJlZ2lzdGVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxvZ2luU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAodXNlci51c2VybmFtZSAhPT0gJycgJiYgdXNlci5wYXNzd29yZCAhPT0gJycpIHtcclxuICAgICAgICAgICAgQXhpb3MucG9zdChob3N0ICsgJy9sb2dpbicsIHVzZXIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5Ub2dnbGVMb2dpbihyZXMuZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG9zdClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgeyB2aXNpYmxlLCByZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwibWlkZGxlXCIgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezIwfSBzbT17MTZ9IG1kPXsxNH0gbGc9ezEyfSB4bD17N30gc3R5bGU9e3sgbWF4V2lkdGg6ICc0MDBweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MT0dJTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm5hbWUtbGFiZWxcIj7otKblj7c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBhbGxvd0NsZWFyIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWV9IG9uRm9jdXM9e3RoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMsIDApfSBvbkJsdXI9e3RoaXMuYmx1cklucHV0LmJpbmQodGhpcywgMCl9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcywgJ3VzZXJuYW1lJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInB3ZC1sYWJlbFwiID7lr4bnoIE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBvblByZXNzRW50ZXI9e3RoaXMubG9naW5TdWJtaXR9IHZhbHVlPXt0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmR9IG9uRm9jdXM9e3RoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMsIDEpfSBvbkJsdXI9e3RoaXMuYmx1cklucHV0LmJpbmQodGhpcywgMSl9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcywgJ3Bhc3N3b3JkJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9yZ2V0LXB3ZFwiPuW/mOiusOWvhuegge+8nzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ29uLWJ0bnNcIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5rOo5YaMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4tYnRuc1wiIG9uQ2xpY2s9e3RoaXMubG9naW5TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHRoaXMucmVnSGVhZGVyIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2VtYWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXmgqjnmoTpgq7nrrEnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9ezxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDAsMCwwLC4yNSknIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25jaGFuZ1JlZ2lzdGVyLmJpbmQodGhpcywgJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3VzZXJuYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXmgqjnmoTnlKjmiLflkI0nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17PEljb24gdHlwZT1cInVzZXJcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbmNoYW5nUmVnaXN0ZXIuYmluZCh0aGlzLCAndXNlcm5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncGFzc3dvcmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeaCqOeahOWvhueggScgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMub25jaGFuZ1JlZ2lzdGVyLmJpbmQodGhpcywgJ3Bhc3N3b3JkJyl9IHByZWZpeD17PEljb24gdHlwZT1cImxvY2tcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2NoZWNrX3Bhc3N3b3JkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7flho3mrKHovpPlhaXmgqjnmoTlr4bnoIEnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17PEljb24gdHlwZT1cImxvY2tcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hlY2tQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4PXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zYW1lID8gJycgOiA8VG9vbHRpcCB0aXRsZT17dGhpcy5zdGF0ZS50aXB9PjxJY29uIHR5cGU9XCJpbmZvLWNpcmNsZVwiIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuNDUpJyB9fSAvPjwvVG9vbHRpcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOazqOWGjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXQtYm94IC5uYW1lLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAke3RoaXMuc3RhdGUubmFtZS5ib3R0b219cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7dGhpcy5zdGF0ZS5uYW1lLnNpemV9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWJveCAucHdkLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAke3RoaXMuc3RhdGUucGFzc3dvcmQuYm90dG9tfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke3RoaXMuc3RhdGUucGFzc3dvcmQuc2l6ZX1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbi8v6ZyA6KaB6Kem5Y+R5LuA5LmI6KGM5Li6XHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBUb2dnbGVMb2dpbjogKHVzZXIpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUF1dGgnLCB1c2VyIH0pLFxyXG4gICAgICAgIExvZ2luT3V0OiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbk91dCcgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9ybS5jcmVhdGUoeyBuYW1lOiAnbm9ybWFsX2xvZ2luJyB9KShsb2dpbikpOyJdfQ== */\n/*@ sourceURL=D:\\nojspro\\next-antd\\pages\\login.js */")));
    }
  }]);

  return login;
}(react__WEBPACK_IMPORTED_MODULE_24__["Component"]);

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
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(mapStateToProps, mapDispatchToProps)(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.create({
  name: 'normal_login'
})(login)));

/***/ })

})
//# sourceMappingURL=login.js.26ff8cad0772432848c9.hot-update.js.map