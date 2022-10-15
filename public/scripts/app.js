"use strict";

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

var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
var display = false;
var toggleText = function toggleText() {
  console.log(' toggle cclick!');
  display = !display, console.log(display);
  render();
};
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Toggle Text Mini App"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: toggleText
  }, " ", display ? 'Hide' : 'Show', " "), display && /*#__PURE__*/React.createElement("h2", null, "Yo the toggle Text is here!")));
  root.render(template);
};
render();
