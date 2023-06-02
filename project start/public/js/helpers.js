// used to create any html element
const elem = (tag) => document.createElement(tag);
const text = (content) => document.createTextNode(content);
const getElem = (id) => document.getElementById(id);
// Currying allows us to create specialized functions based upon any provided parameters.
// In this addClass function we're able to break it down into 2 functions (due to having 2 parameters),
// in the compose function on line 32
//  1. we delcare R.compose() with elem('div').
//    1a. elem('div') serves as the element parameter to the addClass function
// 2. we invoke the addClass function inside the compose function with the pameters being the desired class name
//  we want to add
const addClass = R.curry(function (className, element) {
  element.classList.add(className);
  // if we did not return element here, we would not be able to use it in the compose function above
  return element;
});
const append = R.curry(function append(node, element) {
  element.appendChild(node);

  return element;
});

const attr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);

  return element;
});
