'use strict'

console.log('source app.js to scripts app.js');


const template  =
    <div>
      <h1>Stand alone Demo</h1>
    </div>


// render()

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(template )