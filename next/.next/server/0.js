exports.ids = [0];
exports.modules = {

/***/ "./components/edit.js":
/*!****************************!*\
  !*** ./components/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/upload/style/css */ "./node_modules/antd/lib/upload/style/css.js");
/* harmony import */ var antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/upload */ "antd/lib/upload");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/popover/style/css */ "./node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/tag/style/css */ "./node_modules/antd/lib/tag/style/css.js");
/* harmony import */ var antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! antd/lib/notification/style/css */ "./node_modules/antd/lib/notification/style/css.js");
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! antd/lib/notification */ "antd/lib/notification");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _model_storage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../model/storage */ "./model/storage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-quill */ "react-quill");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _static_css_edit_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../static/css/edit.css */ "./static/css/edit.css");
/* harmony import */ var _static_css_edit_css__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_static_css_edit_css__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _config_host__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../config/host */ "./config/host.js");
































var _jsxFileName = "R:\\nojs\\next\\components\\edit.js";








var host = _config_host__WEBPACK_IMPORTED_MODULE_39__["default"].host;

function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg';

  if (!isJPG) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('You can only upload JPG file!');
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('Image must smaller than 2MB!');
  }

  return isJPG && isLt2M;
}

var idGroup = [];

function titleAddId(hid) {
  var str = "",
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 随机产生

  for (var i = 0; i < 4; i++) {
    var range = Math.round(Math.random() * arr.length);
    str += arr[range];

    if (i === 3) {
      for (var n = 0; n < idGroup.length; n++) {
        if (str === idGroup[n]) {
          i = 0;
          str = "";
        }
      }
    }
  }

  console.log(str, arr.length);
  return str;
}

var openNotificationWithIcon = function openNotificationWithIcon(type, msg) {
  antd_lib_notification__WEBPACK_IMPORTED_MODULE_29___default.a[type]({
    message: msg //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',

  });
};

var NoEdit =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_26__["default"])(NoEdit, _Component);

  function NoEdit(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__["default"])(this, NoEdit);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__["default"])(NoEdit).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "modules", {
      toolbar: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'], [{
        'header': 1
      }, {
        'header': 2
      }], // custom button values
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], // superscript/subscript
      [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], // outdent/indent
      [{
        'direction': 'rtl'
      }], // text direction
      [{
        'size': ['small', false, 'large', 'huge']
      }], // custom dropdown
      [{
        'header': [2, 3, 4, 5, 6, false]
      }], [{
        'color': []
      }, {
        'background': []
      }], // dropdown with defaults from theme
      [{
        'font': []
      }], [{
        'align': []
      }], ['image', 'clean']]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleHoverChange", function (visible) {
      _this.setState({
        hovered: visible,
        clicked: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleClickChange", function (visible) {
      _this.setState({
        clicked: visible,
        hovered: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleChange", function (value) {
      //console.log(value)
      _this.setState({
        text: value
      });

      var _this$state = _this.state,
          title = _this$state.title,
          text = _this$state.text,
          label = _this$state.label,
          imageUrl = _this$state.imageUrl;

      if (title !== '' || text !== '') {
        var data = {
          title: title,
          text: text,
          label: label,
          imageUrl: imageUrl
        }; //console.log(data);

        _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].set('edit', data);
      } else {
        _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].remove('edit');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "titleChange", function () {
      _this.setState({
        title: _this.refs.title.value
      });

      var _this$state2 = _this.state,
          title = _this$state2.title,
          text = _this$state2.text,
          label = _this$state2.label,
          imageUrl = _this$state2.imageUrl;

      if (title !== '' || text !== '') {
        var data = {
          title: title,
          text: text,
          label: label,
          imageUrl: imageUrl
        };
        console.log(data);
        _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].set('edit', data);
      } else {
        _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].remove('edit');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "saveText", function () {
      var _this$state3 = _this.state,
          title = _this$state3.title,
          text = _this$state3.text,
          label = _this$state3.label,
          imageUrl = _this$state3.imageUrl;

      if (title !== '' || text !== '') {
        var data = {
          title: title,
          text: text,
          label: label,
          imageUrl: imageUrl
        };
        console.log(data);
        _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].set('edit', data);
      } else {
        openNotificationWithIcon('error', '标题或内容为空');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "textTitleNav",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_19___default.a.mark(function _callee() {
      var value, end, start, valuenum, i, hid, aid, item;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_19___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _this.state.text;
              end = 0;
              start = 0;
              valuenum = value.split('</h2>').length - 1;

              for (i = 0; i < valuenum; i++) {
                start = value.indexOf('<h2>', end) + 4;
                end = value.indexOf('</h2>', start);
                hid = value.substring(start, end);
                aid = titleAddId(hid);
                item = {
                  title: hid,
                  id: aid
                };
                idGroup.push(item);
                value = value.replace('<h2>' + hid, '<h2 id="' + aid + '">' + hid);
              }

              console.log(value, start, end, idGroup);
              _context.next = 8;
              return _this.setState({
                text: value,
                anav: true
              });

            case 8:
              return _context.abrupt("return", _this.submitText());

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "submitText", function () {
      var _this$state4 = _this.state,
          label = _this$state4.label,
          title = _this$state4.title,
          text = _this$state4.text,
          imageUrl = _this$state4.imageUrl,
          anav = _this$state4.anav;
      var _this$props$user = _this.props.user,
          openId = _this$props$user.openId,
          nickName = _this$props$user.nickName; //text = this.textTitleNav(text);

      var data = {
        id: _this.state.id,
        title: title,
        openId: openId,
        author: nickName,
        text: text,
        coverImg: imageUrl,
        nav: idGroup,
        label: label
      };

      if (title !== '' && text !== '' && anav === true) {
        console.log(_this.state);
        axios__WEBPACK_IMPORTED_MODULE_37___default.a.post(host + '/api/update', data).then(function (res) {
          _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].remove('edit');

          _this.setState({
            anav: false,
            title: '',
            text: ''
          });

          idGroup = [];
        });
      } else {
        idGroup = [];
        console.log(title, anav);
        openNotificationWithIcon('error', '标题或内容为空');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "openRealTime", function () {
      if (_this.state.eye) {
        _this.setState({
          eye: false,
          realtime: 24
        });
      } else {
        _this.setState({
          eye: true,
          realtime: 12
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "imgChange", function (info) {
      console.log(info.file.status);

      if (info.file.status === 'uploading') {
        getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({
            imageUrl: imageUrl
          });
        });
        if (_this.state.imageUrl !== '') openNotificationWithIcon('success', '图片上传成功');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleClose", function (removedTag) {
      var label = _this.state.label.filter(function (tag) {
        return tag !== removedTag;
      });

      console.log(label);

      _this.setState({
        label: label
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "showInput", function () {
      _this.setState({
        inputVisible: true
      }, function () {
        return _this.input.focus();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleInputChange", function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "handleInputConfirm", function () {
      var inputValue = _this.state.inputValue;
      var label = _this.state.label;

      if (inputValue && label.indexOf(inputValue) === -1) {
        label = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_18__["default"])(label), [inputValue]);
      }

      console.log(label);

      _this.setState({
        label: label,
        inputVisible: false,
        inputValue: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_25__["default"])(_this), "saveInputRef", function (input) {
      return _this.input = input;
    });

    _this.state = {
      id: '',
      clicked: false,
      hovered: false,
      title: '',
      text: '',
      imageUrl: '',
      eye: true,
      realtime: 12,
      anav: false,
      label: ['前端'],
      inputVisible: false,
      inputValue: '',
      eyeicon: [{
        title: '关闭实时显示',
        icon: 'eye-invisible'
      }, {
        title: '开启实时显示',
        icon: 'eye'
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__["default"])(NoEdit, [{
    key: "componentDidMount",
    //生命周期
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props);
      var _this$props$user2 = this.props.user,
          openId = _this$props$user2.openId,
          nickName = _this$props$user2.nickName;
      axios__WEBPACK_IMPORTED_MODULE_37___default.a.get(host + '/public/tweet?_id=' + this.props.id).then(function (res) {
        console.log(res.data);

        if (res.data.openId == openId) {
          _this2.setState({
            id: res.data._id,
            title: res.data.title,
            text: res.data.text,
            label: res.data.label,
            imageUrl: res.data.imageUrl
          });
        }
      });

      if (_model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].get('edit')) {
        var _storage$get = _model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].get('edit'),
            title = _storage$get.title,
            text = _storage$get.text,
            label = _storage$get.label,
            imageUrl = _storage$get.imageUrl;

        console.log(_model_storage__WEBPACK_IMPORTED_MODULE_33__["default"].get('edit'));
        this.setState({
          title: title,
          text: text,
          label: label,
          imageUrl: imageUrl
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state5 = this.state,
          eye = _this$state5.eye,
          eyeicon = _this$state5.eyeicon;
      var _this$state6 = this.state,
          label = _this$state6.label,
          inputVisible = _this$state6.inputVisible,
          inputValue = _this$state6.inputValue;
      return react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
        id: "NoEdit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "edit-bottom-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
        className: "edit-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("input", {
        placeholder: "\u5728\u8FD9\u91CC\u8F93\u5165\u6807\u9898",
        className: "edit-title",
        ref: "title",
        value: this.state.title,
        onChange: this.titleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
        className: "edit-nav-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          width: 500
        },
        content: react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, label.map(function (tag, index) {
          var isLongTag = tag.length > 20;
          var tagElem = react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_17___default.a, {
            key: tag,
            closable: true,
            onClose: function onClose() {
              return _this3.handleClose(tag);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 326
            },
            __self: this
          }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag);
          return isLongTag ? react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default.a, {
            title: tag,
            key: tag,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            },
            __self: this
          }, tagElem) : tagElem;
        }), inputVisible && react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
          ref: this.saveInputRef,
          type: "text",
          size: "small",
          style: {
            width: 78
          },
          value: inputValue,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }), !inputVisible && react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_17___default.a, {
          onClick: this.showInput,
          style: {
            background: '#fff',
            borderStyle: 'dashed'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
          type: "plus",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }), " New Tag")),
        title: "\u5F53\u524D\u6807\u7B7E",
        trigger: "hover",
        visible: this.state.hovered,
        onVisibleChange: this.handleHoverChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        shape: "circle",
        icon: "tag",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default.a, {
        title: "上传封面图",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_5___default.a, {
        name: "avatar",
        action: "/edit",
        showUploadList: false,
        beforeUpload: beforeUpload,
        onChange: this.imgChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        shape: "circle",
        icon: "picture",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default.a, {
        title: eye ? eyeicon[0].title : eyeicon[1].title,
        className: "hidden_",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        shape: "circle",
        icon: eye ? eyeicon[0].icon : eyeicon[1].icon,
        size: "small",
        onClick: this.openRealTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default.a, {
        title: "\u4FDD\u5B58\u8349\u7A3F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        shape: "circle",
        icon: "save",
        size: "small",
        onClick: this.saveText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_15___default.a, {
        title: "\u53D1\u5E03\u6587\u7AE0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "primary",
        shape: "round",
        icon: "rocket",
        size: "small",
        className: "release_",
        onClick: this.textTitleNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "\u53D1\u5E03")))))), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "show-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: this.state.realtime,
        xl: this.state.realtime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
        className: "text-editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_35___default.a, {
        modules: this.modules,
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 0,
        lg: 24 - this.state.realtime,
        xl: 24 - this.state.realtime,
        className: "html-content ql-snow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement("div", {
        className: "ql-editor",
        dangerouslySetInnerHTML: {
          __html: this.state.text
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }))));
    }
  }]);

  return NoEdit;
}(react__WEBPACK_IMPORTED_MODULE_32__["Component"]);

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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_34__["connect"])(mapStateToProps, mapDispatchToProps)(NoEdit));

/***/ }),

/***/ "./config/host.js":
/*!************************!*\
  !*** ./config/host.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  host: 'http://127.0.0.1:3001' // host: 'http://111.230.87.65:3001'

});

/***/ }),

/***/ "./model/storage.js":
/*!**************************!*\
  !*** ./model/storage.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  set: function set(key, value) {
    localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  },
  get: function get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove: function remove(key) {
    localStorage.removeItem(key);
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/button/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/col/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/col/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/grid/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/grid/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/icon/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/input/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./node_modules/antd/lib/message/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/message/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/notification/style/css.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd/lib/notification/style/css.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/notification/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/notification/style/index.css":
/*!************************************************************!*\
  !*** ./node_modules/antd/lib/notification/style/index.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/popover/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/popover/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/popover/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/popover/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/popover/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/progress/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/progress/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/progress/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/progress/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/progress/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/row/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tag/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tag/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tag/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/tag/style/index.css":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/tag/style/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tooltip/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/upload/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/upload/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/upload/style/index.css");

__webpack_require__(/*! ../../progress/style/css */ "./node_modules/antd/lib/progress/style/css.js");

__webpack_require__(/*! ../../tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/upload/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/upload/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/edit.css":
/*!*****************************!*\
  !*** ./static/css/edit.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map