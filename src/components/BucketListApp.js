import React from 'react'
import ReactDOM from 'react-dom/client'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class BucketListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleRandomSelect = this.handleRandomSelect.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  componentDidMount() {        
    // console.log('componentDidMount ran')
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {

      // return console.log(error.message);
    }
  }

  componentDidUpdate(prevState, prevProps) {         // Can take 3 args: prevState, prevProps and snapShot 
    if((prevState.options.length - this.props.options.length) !== (this.state.options.length  + this.props.options.length)) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate ran')
      console.log(prevState.options.length, this.state.options.length)
      // console.log(yo)
      console.log(localStorage.getItem('options'));
    }

  }

  handleDeleteOptions() {
    this.setState(() => ({  options: this.props.options  }))
  }

  handleDeleteOption(optionToDelete) {
    // e.preventDefault()
    // let num = this.state.options.length;
    // option = e.target.elements.option.value;
    // const delTarget = this.state.options.indexOf(optionToDelete) > -1;
    // let opt = e.target;
    // let target ;
    console.log(
      // delTarget,
       optionToDelete)
    // if(delTarget) {

    //  target = this.state.options.indexOf(optionToDelete)
      console.log('delete option:', optionToDelete)
      // this.state.options.splice(target, 1)
      this.setState((prevState) => {
      //  return this.state.options.splice(target, 1)
          return {
            options: prevState.options.filter((option) => {
              return optionToDelete !== option
            })
          }
          // if(prevState.options.length !== this.state.options.length) {
          //   const json = JSON.stringify(this.state.options);
          //   localStorage.setItem('options', json);
          // }
      })
    // }
  }

  handleRandomSelect() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const randomOption = this.state.options[randomNum]
    alert(randomOption);
  }

  handleAddOption(option) {
    // console.log(option)
    // console.log(prevState.options),
    // console.log(this.state.options),
    // console.log(option)

    if(!option) {
      return 'Enter a valid and at least one character long option!'
    } else if (this.state.options.indexOf(option) > -1) {
      // return console.log('This option already exist in the Options List!')
      console.log('This option already exist in the Options List!')
      return 'This option already exists in the Options List!'
    }
  if(option) {
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat(option)

      //   }
      // })
      this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }

  }

  render() {

    // const title = "The BucketList App!";
    const subtitle = "Create Options / tasks, personal or randomly!"

    return (
      <div>
        <Header 
        // title={title} 
        // subtitle={subtitle} 
        />
        <Action 
        handleRandomSelect={this.handleRandomSelect} 
        hasOptions={this.state.options.length > 0} 
        />
        <Options 
        // title="Personal List"
        options={this.state.options} 
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
        // handleDeleteOption = {this.handleDeleteOption}
        />
        {/* <Option /> */}
        <AddOption 
        handleAddOption={ this.handleAddOption }
        />
      </div>
    )
  }
}

BucketListApp.defaultProps = {
  options: []
}
