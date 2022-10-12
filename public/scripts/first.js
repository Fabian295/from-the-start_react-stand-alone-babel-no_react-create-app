console.log('first!');

const template = React.createElement("p", {
  id: 10,
  name: 'John',
}, "JSX Component, ");

const DOMContainer = document.getElementById('app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(template)