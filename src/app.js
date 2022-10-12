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

const Nav = () => {
//  const {Link} = React;
  return (
    <div>
    <ul>
      <li>Link 1 </li>
      <li>Link 2</li>
      <li>Link 3</li>

    </ul>
  </div>
  )
}

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
// root.render(template )
root.render(<Hello french='Bonjour Tout le Monde!' english='Hello Chaps!' /> )
// root.render(<Nav/> )