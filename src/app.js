console.log('App.js is running');

const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const template = (
  <div>
  <h1> { app.title}</h1>
 
 { app.subtitle && <p> {app.subtitle} </p> } 
  { (app.options && app.options.length > 0) ? <p>Here are your options:</p> : <p> No options</p> }
  <ol>
    <li></li>
  </ol>
</div> 
);


//id gets bound just fine but class = className
// templateTwo turns into a object. console.log(this) to show dom elements
// https://reactjs.org/docs/dom-elements.html
// html attributes that are reserved but supported are camelcased

let count = 0
const someId = 'my-cool-id'

const addOne = () => {
  count++
  console.log(count)
}


const minusOne = () => {
  count--
  console.log(count)
}

const reset = () => {
  count = 0
  console.log(count)
}


const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button id={someId} className="button" onClick={addOne}> +1</button>
    <button  onClick={minusOne}> -1</button>
    <button  onClick={reset}>Reset</button>
    
  </div>

)
  

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot )