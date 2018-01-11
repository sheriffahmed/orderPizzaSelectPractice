const React = require('react');
const ReactDOM = require('react-dom');

class Pizza extends React.Component {
  constructor() {
    super();
    this.crusts = ['', 'thin', 'classic', 'deep dish', 'pretzel', 'stuffed (cheesy)', 'stuffed (pepperoni)']
    this.cheeses = ['', 'parmesan', 'mozzarella', 'cheddar', 'provolone', 'american']
    this.state = {
      currentCrust: '',
      currentCheese: '',
      orderList: []
    }
  }
  handleChange = e => {
    let cheese = document.querySelector('#cheese');
    let crust = document.querySelector('#crust');
    this.setState({
      currentCheese: cheese.value,
      currentCrust: crust.value
    })
    if (cheese.value && crust.value) {
      this.state.orderList.push(crust.value + ' ' + cheese.value);
      crust.selectedIndex = 0;
      cheese.selectedIndex = 0;
    }
  }
  render() {
    return (
      <div>
        <h1>PIZZA ORDER WITH MAP</h1>
        <select id="crust" onChange={this.handleChange}>
          {this.crusts.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <select id="cheese" onChange={this.handleChange}>
          {this.cheeses.map(c =>
            <option value={c}>{c}</option>)}
        </select>
        <h3>Orders:</h3>
        <ul>
          {this.state.orderList.map(o =>
            <li>{o}</li>)}
        </ul>
      </div>
    )
    /*
    return(
      <div>
      <h1>PiZzA OrDeReR</h1>
      <select>
      <option></option>
      <option value="thin">thin</option>
      <option value="classic">classic</option>
      <option value="deep">deep dish</option>
      </select>
      <select></select>
      </div>
    )
    */
  }

}
ReactDOM.render(<Pizza />, document.querySelector('#root'));