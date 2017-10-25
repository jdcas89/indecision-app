'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = function addArrow(a, b) {
  //no access to arguments
  //console.log(arguments) gives error
  return a + b;
};

console.log(add(5, 7, 1000));

var user = {
  name: 'John',
  cities: ['New york', 'Cali'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // workaround for anonymous function: const that = this
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {
      //arrow function bounds this to the context they were created in
      //anonymous function bounds its own this value  
      console.log(_this.name + ' has lived in ' + city);
    });
  },
  printPlacesLivedNewSyntax: function printPlacesLivedNewSyntax() {
    var _this2 = this;

    this.cities.forEach(function (city) {
      console.log(_this2.name + ' has lived in ' + city);
    });
  },
  changeCitiesArray: function changeCitiesArray() {
    var _this3 = this;

    return this.cities.map(function (city) {
      return _this3.name + ' has lived in ' + _this3.city;
    });
  }
};

//user.printPlacesLivedNewSyntax()

console.log(user.changeCitiesArray());

var multiplier = {
  numbers: [5, 6, 2, 5],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this4 = this;

    return this.numbers.map(function (number) {
      return number * _this4.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
