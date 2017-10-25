"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

var onRemoveAll = function onRemoveAll() {

  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);

  var option = app.options[randomNum];
  alert(option);
};

//https://reactjs.org/docs/events.html

var appRoot = document.getElementById("app");

//id gets bound just fine but class = className
// templateTwo turns into a object. console.log(this) to show dom elements
// https://reactjs.org/docs/dom-elements.html
// html attributes that are reserved but supported are camelcased

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      " ",
      app.subtitle,
      " "
    ),
    app.options && app.options.length > 0 ? React.createElement(
      "p",
      null,
      "Here are your options:"
    ) : React.createElement(
      "p",
      null,
      " No options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove all"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
