import React from "react";
// import ReactDOM from "react-dom/client";
// import Option from './components/Option'

export default class AddOption extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this)

    // this.state = {
    //   error: undefined
    // }
  // }

  state = {
    error: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim();
  //  {option && this.props.handleAddOption(option)}
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })

   e.target.elements.option.value = '';
  } 

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
       <form onSubmit={ this.handleAddOption }>
        <input type="text" name="option" />
        <button>Add Option</button>
       </form>
      </div>
    )
  }
}