console.log('new live!')


const title = "The BucketList App!";
const subtitle = "Create Options / tasks, personal or randomly!"
// const options = ['one', 'two', 'three'];

class BucketListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['one', 'two', 'three', 'four'],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleRandomSelect = this.handleRandomSelect.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => {
     return {
      options: [],
      }
    })
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
          return 'This option already exist in the Options List!'
        }
  // if(option) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
          // options: prevState.options + option
        }
      })
    // }

  }

  render() {
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
        handleRandomSelect={this.handleRandomSelect} 
        hasOptions={this.state.options.length > 0} 
        />
        <Options 
        options={this.state.options} 
        handleDeleteOptions = {this.handleDeleteOptions}
        />
        <Option />
        <AddOption handleAddOption={ this.handleAddOption }/>
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.subtitle}</h3>
    </div>
    )
  }
}

class Action extends React.Component {
  // handlePick() {
  //   alert('handlePick')
  // }
  render() {
    return (
      <div>
        <button 
        onClick={this.props.handleRandomSelect}
        disabled={ !this.props.hasOptions }
        >
          What Should I Do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  // handleRemoveAll() {
  //   // alert('handleRemoveAll')
  //   console.log(this.props.options[1], this.props.options)
  //   // this.props.options = [];
  // }
  render() {
    return (
      <div>
        {/* <button onClick={this.handleRemoveAll} >removeAll</button> */}
        <button onClick={this.props.handleDeleteOptions} >removeAll</button>
         
        <h3> Options List Component </h3>
        <ol >
        {this.props.options.map((option, index) => {
          return <li key={index}>
                    <Option key={index} optionText={option}/>
                 </li>
                }) }
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>
          { this.props.optionText }
        </p>
      </div>
    )
  }
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
root.render(<BucketListApp />);