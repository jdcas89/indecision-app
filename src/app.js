class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
        //options: prevState.options.concat(option)
      };
    });
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
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
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
        {props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  
}

const Option = (props) => {
    return (
      <div>
        <p>{props.optionText}</p>
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
    e.target.elements.option.value = ''

    if (error) {
      this.setState(() => {
        return {
          error: error
        }
      })
    }
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


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
