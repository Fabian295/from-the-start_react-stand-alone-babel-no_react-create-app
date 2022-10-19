console.log('new live!')

import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = "The BucketList App!";
// const subtitle = "Create Options / tasks, personal or randomly!"
// const options = ['one', 'two', 'three'];

class BucketListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
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
    if((prevState.options.length - 1 ) !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate ran')
      console.log(prevState.options.length, this.state.options.length)
      // console.log(localStorage.getItem('options'));
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

// class Header extends React.Component {
//   render() {
//     return (
//     <div>
      // <h1>{this.props.title}</h1>
      // <h3>{this.props.subtitle}</h3>
//     </div>
//     )
//   }
// }

const Header = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      { !props.subtitle ? '' : <h3>{props.subtitle}</h3> }
    </div>
  )
}

Header.defaultProps = {
  title: "The BucketList App!"
}

const Action = (props) => {

  return (
    <div>
        <button 
          onClick={props.handleRandomSelect}
          disabled={ !props.hasOptions }
          >
              What Should I Do?
        </button>
    </div>
  )
}

// class Action extends React.Component {
  // handlePick() {
  //   alert('handlePick')
  // }
//   render() {
//     return (
//       <div>
        // <button 
        // onClick={this.props.handleRandomSelect}
        // disabled={ !this.props.hasOptions }
        // >
        //   What Should I Do?
        // </button>
//       </div>
//     )
//   }
// }

// class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  // handleRemoveAll() {
  //   // alert('handleRemoveAll')
  //   console.log(this.props.options[1], this.props.options)
  //   // this.props.options = [];
  // }
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.handleRemoveAll} >removeAll</button> */}
//         <button onClick={this.props.handleDeleteOptions} >removeAll</button>
         
//         <h3> Options List Component </h3>
//         <ol >
//         {this.props.options.map((option, index) => {
//           return <li key={index}>
//                     <Option key={index} optionText={option}/>
//                  </li>
//                 }) }
//         </ol>
//       </div>
//     )
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>
//           { this.props.optionText }
//         </p>
//       </div>
//     )
//   }
// }

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {/* <button onClick={props.handleDeleteOption} >Delete an Option</button> */}

      <h3>{ props.title }</h3>
      <ol>
        { props.options.map((option, index) => {
          return <li key={index}>
            <Option 
            key={index}
            optionText={option}  
            handleDeleteOption={ props.handleDeleteOption}
            />
          </li>
        }) }
      </ol>
    </div>
  )
}

Options.defaultProps = {
  title: "Personal List"
}

const Option = (props) => {

  return (
    <div>
      <p>
        { props.optionText } 
      <button onClick={(e) => { 
        props.handleDeleteOption( props.optionText )
        }} > 
        X
      </button>
      </p>

    </div>
  )
}

Option.defaultProps = {

}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
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

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(<BucketListApp options={[ 'Buy a drone and join a race-track club!']} />);

// console.log('Running from app.js in src folder!');