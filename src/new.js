const React = require('react');
const ReactDOM = require('react-dom');
class Pizza extends React.Component {
constructor(){
  super();
  this.state ={
    orderList: []
  }
}
render(){
  return(
    <div> 
    <h1>PIZZA ORDERER</h1>
    <select></select>
    <select></select>
     </div>
  )
}
}
ReactDOM.render(<Pizza />, document.querySelector('#root'));