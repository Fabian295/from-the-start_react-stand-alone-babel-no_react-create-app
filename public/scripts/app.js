'use strict';

console.log('source app.js to scripts app.js');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Stand alone Demo"));

// render()

var DOMContainer = document.getElementById('app');
var root = ReactDOM.createRoot(DOMContainer);
root.render(template);
