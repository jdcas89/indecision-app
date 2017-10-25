
let count = 0
const someId = 'my-cool-id'

const addOne = () => {
  count++
  console.log(count)
  renderCounterApp();
}


const minusOne = () => {
  count--
  console.log(count)
  renderCounterApp();
}

const reset = () => {
  count = 0
  console.log(count)
  renderCounterApp();
}

  

const appRoot = document.getElementById('app')



const renderCounterApp = () => {


  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id={someId} className="button" onClick={addOne}> +1</button>
      <button  onClick={minusOne}> -1</button>
      <button  onClick={reset}>Reset</button>
      
    </div>
  
  )
  ReactDOM.render(templateTwo, appRoot )
}

renderCounterApp();