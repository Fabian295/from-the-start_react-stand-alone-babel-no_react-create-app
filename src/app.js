// 'use strict';

class BucketListApp extends React.Component {

  render() {

    const title = "Bucket List App";
    const subtitle = "Structure and orgenize your way of Life";
    const options = ["one", "two", "three"];

    return (
    <div>
      {/* <React.StrictMode> */}
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <Option />
        <AddOption />
      {/* </React.StrictMode> */}
    </div>
    ) 
  }
}

class Header extends React.Component {

  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>
    ) 
  }
}

class Action extends React.Component {

  handlePick() {
    alert("HandlePick")
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handlePick} >What should I do?</button>
      </div>
      )               
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log('Remove All!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll} >Remove All</button>
       {
        this.props.options.map((option, index) => {

         return ( 
                  <div key={index}>
                    {<Option key={index} optionText={option} />}
                  </div>
          )
        })
       }
      </div>
      )               
  }
}

class Option extends React.Component {

  render() {
    return (
      <div>
        <p>
          {this.props.optionText}
        </p>
      </div>
      )               
  }
}

class AddOption extends React.Component {

  handdleAddOption (e) {
    e.preventDefault()


  }

  handleInputChange(e) {
    
  }
  render() {
    return (
      <div>
        <form onSubmit={handdleAddOption}>
         
         <input onChange={handleInputChange} type="text" name="option" />

        </form>
      </div>
      )               
  }
}

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(
  <React.StrictMode>
    <BucketListApp />
  </React.StrictMode>
)
;