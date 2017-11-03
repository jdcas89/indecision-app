class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  //https://reactjs.org/docs/react-component.html
  componentDidMount(){
    console.log('componentDidMount')
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() =>( { options : options }))
      }
    } catch (e){
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate')
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  
  }

  componentWillMount(){

    console.log('componentWillMount')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option )
    }));
  }
  
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat([option]) }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);

    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
       {  props.subtitle && <h2>{props.subtitle}</h2>} 
      </div>
    );
}

Header.defaultProps ={
  title : 'Default title'
}

const Action = (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
}

const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {
          props.options.length === 0 && <p>Please add an option to get started</p>
        }
        {props.options.map(option => (
          <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    );
  
}

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
        >Remove
        </button>
      </div>
    );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if(!error){
      e.target.elements.option.value = ''
    }
   

      this.setState(() => ({ error: error}))
  }
  render() {
    return (
      <div>
      { this.state.error && <p>{ this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>      
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: { props.name}</p>
//       <p>Age: { props.age} </p>
//     </div>
//   )
// }


// ReactDOM.render(<IndecisionApp options={['Test', 'Hello']}/>, document.getElementById("app"));
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

