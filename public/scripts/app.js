'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' ',
    app.subtitle,
    ' '
  ),
  app.options && app.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options:'
  ) : React.createElement(
    'p',
    null,
    ' No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement('li', null)
  )
);

//id gets bound just fine but class = className
// templateTwo turns into a object. console.log(this) to show dom elements
// https://reactjs.org/docs/dom-elements.html
// html attributes that are reserved but supported are camelcased

var count = 0;
var someId = 'my-cool-id';

var addOne = function addOne() {
  count++;
  console.log(count);
};

var minusOne = function minusOne() {
  count--;
  console.log(count);
};

var reset = function reset() {
  count = 0;
  console.log(count);
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: someId, className: 'button', onClick: addOne },
    ' +1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    ' -1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
