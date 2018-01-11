const React = require('react');
const ReactDOM = require('react-dom');
class Pizza extends React.Component {
  constructor() {
    super();
    this.crusts =['', 'thin','classic','deep dish']
    this.cheeses= ['', 'parmesan', 'mozella', 'cheddar', 'provolone']
    this.state = {
      orderList: []
    }
  }
  handleCrust = e =>{
    this.setState({
      currentCrust: e.target.value
    })

  } 
  handleCheese = e => {
    this.setState({
      currentCheese: e.target.value
    })
    let cheeseVal = document.querySelector('#cheese').value;
    let crustVal = document.querySelector('#crust').value;
    if(cheeseVal && crustVal){
      this.state.orderList.push(crustVal + ' ' + cheeseVal);
      // document.quer
      // crustVal =
    }
  } 
  render() {
    return (
      <div>
        <h1>PIZZA ORDERER</h1>
        <select id="crust" onChange={this.handleCrust}>
        {this.crusts.map(c =>
        <option value= {c}>{c}</option>)}
        </select>
        <select id="cheese" onChange={this.handleCheese}>
        {this.cheeses.map( (ch)=>
        <option value={ch}>{ch}</option>)}
        </select>
        <h3>ORDERS</h3>
        <ul>
        {this.state.orderList.map( o =>
        <li>{o}</li>)}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Pizza />, document.querySelector('#root'));