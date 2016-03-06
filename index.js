// Kabali.js 0.0.1
// Kabali may be freely distributed under the MIT license.

var kabali = module.exports = function(obj) {
  return new Kabali(obj);
};

function Kabali(obj) {
  this.value = obj;
}

Kabali.prototype.check = function() {
  if (this.value)
    return true;
  return false;
};

Kabali.prototype.isArray = function() {
  return Object.prototype.toString.call(this.value) === '[object Array]';
};

Kabali.prototype.isPrimitive = function(arg) {
  return arg === null || typeof arg != 'object' && typeof arg != 'function';
};

Kabali.prototype.convertStringToArray = function(arg) {
  return Array.prototype.slice.call(arg);
};

Kabali.prototype.convertArrayToString = function(arg) {
  return Array.prototype.slice.call(arg).join("");
};

Kabali.prototype.findKey = function() {
  var result = [];
  var key = this.convertArrayToString(arguments);
  if (this.check()) {
    this.value.map(function(item, index) {
      Object.keys(item).map(function(k) {
        if (k === key) {
          result.push(item);
        }
      });
    });
    this.value = result;
  }
  return this;
};

Kabali.prototype.findMultipleKeys = function() {
  var result = [];
  var keys = this.convertStringToArray(arguments);
  if (this.check()) {
    this.value.map(function(item, index) {
      Object.keys(item).map(function(k) {
        keys.map(function(key) {
          if (key === k) {
            result.push(item);
          }
        });
      });
    });
    this.value = result;
  }
  return this;
};

Kabali.prototype.findValue = function() {
  var result = [];
  var val = this.convertArrayToString(arguments);
  if (this.check()) {
    this.value.map(function(item, index) {
      if (val === item) {
        result.push(item);
      }
    });
    this.value = result;
  }
  return this;
};

Kabali.prototype.findMultipleValues = function() {
  var result = [];
  var val = this.convertStringToArray(arguments);
  if (this.check()) {
    this.value.map(function(item, index) {
      val.map(function(value, index) {
        if (value === item) {
          result.push(item);
        }
      });
    });
    this.value = result;
  }
  return this;
};

Kabali.prototype.getPrototypeChain = function() {};

Kabali.prototype.result = function() {
  return this.value;
};
