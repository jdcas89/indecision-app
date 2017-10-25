console.log("App.js is running");

const app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render()
};

const onRemoveAll = () => {
 
  app.options = [];
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);

  const option = app.options[randomNum];
  alert(option);
}



//https://reactjs.org/docs/events.html

const appRoot = document.getElementById("app");

//id gets bound just fine but class = className
// templateTwo turns into a object. console.log(this) to show dom elements
// https://reactjs.org/docs/dom-elements.html
// html attributes that are reserved but supported are camelcased

const render = () => {
  const template = (
    <div>
      <h1> {app.title}</h1>
  
      {app.subtitle && <p> {app.subtitle} </p>}
      {app.options && app.options.length > 0 ? (<p>Here are your options:</p>) : ( <p> No options</p>)}
  
      <ol>
      { 
        app.options.map((option,index) => <li key={option}>{option}</li> )
      }
      </ol>
     
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={onRemoveAll}>Remove all</button>
      
      <button disabled={ app.options.length === 0 } onClick={onMakeDecision}>What should I do?</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
  
}

render();