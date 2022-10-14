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

/******************************************
 * A pre structure for the real 
 * BucketList application 
 ******************************************/

const app = {
  title: 'The Bucket List',
  subTitle: 'Decide what to do next!',
  options: [],
}

//  if(app.options.length > 0 ){
//  }

const onFormSubmit = (e) => {
  e.preventDefault();

  // const option = e.target.elements[0].value;
  const option = e.target.elements.option.value;
  if(option)
  app.options.push(option);
  console.log(app.options);
  console.log(e.target.elements.option.value);
  // e.target.elements[0].value = '';
  e.target.elements.option.value = '';
  render();
}

const handleInput = (e) => {
  console.log(e.target.value)
}

const removeAll = (e) => {
  console.log('remove all!')
  console.log(app.options)
  app.options = [];
  render();
  console.log(app.options)
}

const onRandomDecision = (e) => {
  e.preventDefault()

  const rand = (Math.floor(Math.random() * app.options.length) )  ;
  let num = (rand + 1)
  console.log(rand)
  const option = app.options[rand] 
  const option2 = app.options[num] 
  console.log(option)
  // console.log(option2)
  // render()
  alert(option)
}


const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
const render = () => {
  const setup = (
  
    <div>
      <h2>{app.title}</h2>
  
      { app.subTitle && <p>{app.subTitle}</p> }
  
      <div>
        {  (app.options.length > 0 ? 'Your Options'  : 'No Options')  }
      </div>
  
      <p>{ app.options.length }</p>
      <ol>
        { app.options.map((option, index) => {
            return <li key={index}> { option } </li>
            }) 
            
           }
        </ol>
      <p>
        <button onClick={ removeAll } >Remove All Options</button>
      </p>
      
      <form onSubmit={onFormSubmit}>
  
        <input type="text" 
        name="option" 
        // onChange={ handleInput } 
        />
        <button >Add Option</button>
       <button  onClick={onRandomDecision} >What should I do?</button>
      </form>
    </div>
  );
  
  root.render(setup )
}

render();

// root.render(template )
// root.render(<Hello french='Bonjour Tout le Monde!' english='Hello Chaps!' /> )
// root.render(<Nav text="without the props. notation" routerText="Link is part of react-router" lib="Part of react for navigation" /> )
// root.render(<Checkbox /> )