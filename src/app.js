console.log('new live!')


const title = "The BucketList App!";
const subtitle = "Create Options / tasks, personal or randomly!"
const options = ['one', 'two', 'three'];

class BucketListApp extends React.Component {
  render() {
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <Option />
        <AddOption />
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
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    // alert('handleRemoveAll')
    console.log(this.props.options[1], this.props.options)
    // this.props.options = [];
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll} >removeAll</button>
         
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
  handleOnSubmit(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim();
   {option && alert(option)}

   e.target.elements.option.value = '';
  } 
  render() {
    return (
      <div>
       <form onSubmit={ this.handleOnSubmit }>
        <input type="text" name="option" />
        <button>Submit</button>
       </form>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(<BucketListApp />);