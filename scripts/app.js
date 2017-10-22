'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer'
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
  React.createElement(
    'h2',
    null,
    ' ',
    app.subtitle,
    ' '
  )
);

var user = {
  name: 'Juan David',
  age: 28,
  location: 'The world'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
