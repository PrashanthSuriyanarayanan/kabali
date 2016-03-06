var karna = module.exports = function(obj) {
  return new Karna(obj);
};

function Karna(obj) {
  this.value = obj;
}

Karna.prototype.check = function() {
  if (this.value)
    return true;
  return false;
};

Karna.prototype.isArray = function() {
  return Object.prototype.toString.call(this.value) === '[object Array]';
};

Karna.prototype.getPrototypeChain = function() {};

Karna.prototype.isPrimitive = function(arg) {
  return arg === null || typeof arg != 'object' && typeof arg != 'function';
};

Karna.prototype.findKey = function(key) {
  var result = [];
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

Karna.prototype.findMultipleKeys = function(keys) {
  var result = [];
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
