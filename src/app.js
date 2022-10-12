'use strict'

console.log('source app.js to scripts app.js');

const obj = {
  name: 'John',
  content: 'Yo World!'
}

const template  =
    <div>
      <h1>Stand alone Demo</h1>
      {/* using objrct values as expressions */}
      <p>You can use object values as expressions</p>
      <p>{obj.content}</p>
    </div>


class Hello extends React.Component {

  render() {
    return (
      <div>
        <h1>{ this.props.french }</h1>
        <h3>{ this.props.english }</h3>
      </div>
    )
  }
}

const Nav = ( { routerText, lib, text }) => {
//  const {Link} = React;
  return (
    <div>
    <ul>
      <li>Link 1 </li>
      <li>Link 2</li>
      <li>Link 3</li>

    <p>
      { routerText }
    </p>
    <p>
      { lib }
    </p>
    <p>Or with destructuring,{ text  } </p>
    </ul>
  </div>
  )
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    const msg ='';
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({
      checked: !this.state.checked
    });

    console.log(this.state.checked)
  }

  render() {
    let msg='';
    return (
     
      <div>
        <input onChange={ this.handleChecked } type="checkbox" />
          <p>Checkbox is { this.msg }
           {this.state.checked === true ? msg = 'Checked' : msg = 'NOT Checked'}
          </p>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
// root.render(template )
// root.render(<Hello french='Bonjour Tout le Monde!' english='Hello Chaps!' /> )
// root.render(<Nav text="without the props. notation" routerText="Link is part of react-router" lib="Part of react for navigation" /> )
root.render(<Checkbox /> )