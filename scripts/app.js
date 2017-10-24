'use strict';

var squareFunction = function squareFunction(x) {
  console.log(this);
  return x * x;
};
var square = function square(x) {
  console.log(undefined);
  return x * x;
};

var shortArrowSquare = function shortArrowSquare(x) {
  return x * x;
};
console.log(shortArrowSquare(8));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};
var shortGetFirstName = function shortGetFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('John Doe'));
