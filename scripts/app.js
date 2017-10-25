'use strict';

var app = {
  title: 'Visibility toggle',
  showingDetails: false
};

var buttonText = 'Show details';

var onShowDetails = function onShowDetails() {
  if (app.showingDetails) {
    app.showingDetails = !app.showingDetails;
    buttonText = 'Show details';
  } else {
    app.showingDetails = !app.showingDetails;
    buttonText = 'Hide details';
  }
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
      'button',
      { onClick: onShowDetails },
      buttonText
    ),
    React.createElement(
      'p',
      { hidden: !app.showingDetails },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lorem et nisl sollicitudin venenatis nec eget elit. Maecenas in eleifend massa, feugiat consectetur justo. Vivamus at hendrerit massa, vitae commodo magna. Nullam luctus metus eu mauris imperdiet, at congue ex posuere.'
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
