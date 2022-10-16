class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    }
  }

  handleAdd() {
    console.log('Add');

    this.setState({
      count: this.state.count+ 1})
    return this.state.count,
    console.log(this.state.count)
  }

  handleMinus() {
    console.log('Minus');

    // this.setState({
    //   count: this.state.count - 1,
    // })

    this.setState((prevState) => {

    return  {
        count: prevState.count - 1
      };
    })
    console.log(this.state.count)
    // console.log(this.count)
  }

  handleReset() {
    console.log('Reset');

    this.setState({
      count: 0,
    })
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAdd}>Plus</button>
        <button onClick={this.handleMinus}>Minus</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(<Counter />);
