// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var solution = [];

  var getChild = function(Nodelist) {
    // get ready to iterate
    var children = Nodelist.childNodes;
    // loop
    for (var i = 0; i < children.length; i++) {
      if (children[i].classList) {
        if (children[i].classList.contains(className)) {
          solution.push(children[i]);
        }
      }
      if (children[i].hasChildNodes()) {
        getChild(children[i]);
      }
    }     
  };
  
  getChild(document);

  return solution;
};
