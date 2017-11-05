import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  
  // constructor(props) {
  //   super(props);
  //   this.
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }
  handleAddOption = (e) => {
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


