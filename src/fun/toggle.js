console.log('toggle!');

// let display = true;

// let parText ; 
// function run() {
//  return display = !display
// }

// const toggleText = (e) => {
  // console.log('text!')
  // run()
  // console.log(e.target.value)
  // parText =  display ? 'Yo the paragraph title' : '' ;
  // (display = !display);
//   return  console.log(display)
// }

// const toggle = (
//   <div>
//     <h1>Toggle App demo</h1>
    
//     <button value="top" onClick={ toggleText } >
//     { display ? 'Hide' : 'Show'}
//     </button>
//     { ddisplay ? <h3>Yo People here is the content</h3> : '' }
//   </div>
// )

const DOMContainer = document.getElementById('app');
const root =ReactDOM.createRoot(DOMContainer)

let display = false;

const toggleText = () => {
  console.log(' toggle cclick!');

  display = !display,
  console.log(display)
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Toggle Text Mini App</h1>
      <div>
      <button  onClick={ toggleText } > { display ? 'Hide' : 'Show'} </button>
      
        { display && <h2>Yo the toggle Text is here!</h2> }
      
      </div>

    </div>
  )
  root.render(template)
}

render()