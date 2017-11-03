class Counter extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      count: props.count
    }
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count : prevState.count + 1
      }
    })
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count : prevState.count - 1
      }
    })
  }

  handleReset(){
    this.setState(() => {
      return {
        count : 0
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 2
}

ReactDOM.render(<Counter count={5}/>, document.getElementById('app'))








// let count = 0
// const someId = 'my-cool-id'

// const addOne = () => {
//   count++
//   console.log(count)
//   renderCounterApp();
// }


// const minusOne = () => {
//   count--
//   console.log(count)
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0
//   console.log(count)
//   renderCounterApp();
// }

  

// const appRoot = document.getElementById('app')



// const renderCounterApp = () => {


//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={someId} className="button" onClick={addOne}> +1</button>
//       <button  onClick={minusOne}> -1</button>
//       <button  onClick={reset}>Reset</button>
      
//     </div>
  
//   )
//   ReactDOM.render(templateTwo, appRoot )
// }

// renderCounterApp();