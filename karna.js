(function(global){
    var karna = {
      isArray: function(obj){
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
    };
    global.karna = karna;
})(this);
