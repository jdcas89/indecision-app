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

var user = {
  name: 'JD',
  age: 25,
  location: 'The world'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    user.name ? user.name.toUpperCase() : 'Anonymous'
  ),
  user.age && user.age > 18 && React.createElement(
    'p',
    null,
    ' Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
