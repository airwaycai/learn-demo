"use strict";

require("core-js/modules/es6.object.define-property.js");

require("regenerator-runtime/runtime.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.object.assign.js");

require("core-js/modules/es7.array.includes.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var array = [1, 2, 3, 4, 5, 6]; // 实例方法api

array.includes(function (item) {
  return item > 2;
}); // 静态方法api

Object.assign({}, {
  a: 1,
  b: 2
}); // promise api

new Promise(); // 语法

var Robot = /*#__PURE__*/function () {
  function Robot(msg) {
    _classCallCheck(this, Robot);

    this.message = msg;
  }

  _createClass(Robot, [{
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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
