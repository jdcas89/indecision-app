console.log('App.js is running');

var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer'
}

var template = (
  <div>
  <h1> { app.title}</h1>
  <h2> {app.subtitle} </h2> 
</div> 
);

var user = {
  name: 'Juan David',
  age: 28,
  location: 'The world'
}

var templateTwo = (
  <div>
    <h1> { user.name.toUpperCase() }</h1>
    <p> Age: { user.age }</p>
    <p> Location: { user.location }</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot )