
var nameVar = 'Gui';

console.log('nameVar', nameVar)

let nameLet = 'Fernandes';
console.log('nameLet', nameLet);

let template = (
  <h1>test</h1>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);