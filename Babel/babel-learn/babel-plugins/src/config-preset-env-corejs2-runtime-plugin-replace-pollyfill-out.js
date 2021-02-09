"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

require("regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

require("core-js/modules/es7.array.includes.js");

var array = [1, 2, 3, 4, 5, 6]; // 实例方法api

array.includes(function (item) {
  return item > 2;
}); // 静态方法api

(0, _assign["default"])({}, {
  a: 1,
  b: 2
}); // promise api

new _promise["default"](); // 语法

var Robot = /*#__PURE__*/function () {
  function Robot(msg) {
    (0, _classCallCheck2["default"])(this, Robot);
    this.message = msg;
  }

  (0, _createClass2["default"])(Robot, [{
    key: "say",
    value: function say() {
      alertMe(this.message);
    }
  }]);
  return Robot;
}(); // 语法


var fn = function fn() {
  return 1;
}; // 语法


var asyncFn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 2;

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFn() {
    return _ref.apply(this, arguments);
  };
}();
