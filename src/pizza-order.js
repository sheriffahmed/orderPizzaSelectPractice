const React = require('react');
const ReactDOM = require('react-dom');

class PizzaOrder extends React.Component {
  constructor() {
    super();
    this.crust = ['thick', 'thin']
    this.cheese = ['mozzarella', 'chedar', 'colby', 'provolone']
  }
}


ReactDOM.render(<PizzaOrder />, document.getElementById('root'));
