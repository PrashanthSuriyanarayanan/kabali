(function(global){
    var karna = {
      isArray: function(obj){
        return Object.prototype.toString.call(obj) === '[object Array]';
      },
      findPrototypeChain: function(obj){
        
      },
      isPrimitive: function(arg){
        return arg === null || typeof arg != 'object' && typeof arg != 'function';
      },
      getPrototypeOf: function(obj){

      }
    };
    global.karna = karna;
})(this);
