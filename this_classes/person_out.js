"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = function Person() {
  var _this = this;

  _classCallCheck(this, Person);

  _defineProperty(this, "name", "asfd");

  _defineProperty(this, "getName", function () {
    return _this.name;
  });
};

var p = new Person();
console.log(p.getName());
