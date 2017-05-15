// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === undefined || obj === null) {
    return 'null';
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var array = '[';
    for (var i = 0; i < obj.length; i ++) {
      i < obj.length - 1 ? array = array + stringifyJSON(obj[i]) + ',' : array = array + stringifyJSON(obj[i]);
    }
    array = array + ']';
    return array;
  } else if (typeof(obj) === 'object') {
    var objectList = [];
    for (var keys in obj) {
      if (obj[keys] === undefined || keys === 'functions') {
        continue;
      }
      objectList.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]));
    }
    objectList = objectList.join(',');
    return '{' + objectList + '}';
    
  } else {
    return String(obj);
  }
};
