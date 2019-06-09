webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/* global Promise */
var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

function notice(args) {
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var iconType = {
    info: 'info-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'exclamation-circle',
    loading: 'loading'
  }[args.type];
  var target = key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getMessageInstance(function (instance) {
      var iconNode = React.createElement(_icon["default"], {
        type: iconType,
        theme: iconType === 'loading' ? 'outlined' : 'filled'
      });
      instance.notice({
        key: target,
        duration: duration,
        style: {},
        content: React.createElement("div", {
          className: "".concat(prefixCls, "-custom-content").concat(args.type ? " ".concat(prefixCls, "-").concat(args.type) : '')
        }, args.icon ? args.icon : iconType ? iconNode : '', React.createElement("span", null, args.content)),
        onClose: callback
      });
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }

    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }

    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }

    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose) {
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
});
api.warn = api.warning;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/message/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/message/style/index.css");

/***/ }),

/***/ "./node_modules/rc-notification/es/Notice.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-notification/es/Notice.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Notice = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'restartCloseTimer',
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, '' + componentClass, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, componentClass + '-closable', props.closable), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className),
          style: props.style,
          onMouseEnter: this.clearCloseTimer,
          onMouseLeave: this.startCloseTimer,
          onClick: props.onClick
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          props.closeIcon || react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Notice.propTypes = {
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ "./node_modules/rc-notification/es/Notification.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-notification/es/Notification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/createChainedFunction */ "./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/es/Notice.js");















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();
        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, notice);
        } else {
          if (maxCount && notices.length >= maxCount) {
                                                notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
            updatedNotices.shift();
          }
          updatedNotices.push(notice);
        }
        return {
          notices: updatedNotices
        };
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var notices = this.state.notices;

      var noticeNodes = notices.map(function (notice, index) {
        var update = Boolean(index === notices.length - 1 && notice.updateKey);
        var key = notice.updateKey ? notice.updateKey : notice.key;
        var onClose = Object(rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Notice__WEBPACK_IMPORTED_MODULE_13__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
            prefixCls: props.prefixCls
          }, notice, {
            key: key,
            update: update,
            onClose: onClose,
            onClick: notice.onClick,
            closeIcon: props.closeIcon
          }),
          notice.content
        );
      });
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(className), style: props.style },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Notification.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ['getContainer']);

  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }
  react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Notification, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, { ref: ref })), div);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./node_modules/rc-notification/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-notification/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./node_modules/rc-notification/es/Notification.js");

/* harmony default export */ __webpack_exports__["default"] = (_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

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



var success = function success() {
  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('This is a message of success');
};

var error = function error() {
  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('This is a message of error');
};

var warning = function warning() {
  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning('This is message of warning');
};

var logindata = {
  auth: false,
  user: {} //这是action
  // const togglelogin = {
  //   type: 'toggleAuth'
  // }
  //这是reducer

};

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

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.61991175b2a303a11387.hot-update.js.map