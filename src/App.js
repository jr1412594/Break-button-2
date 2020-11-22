import { Component } from 'react'
import Breakfast from './Breakfast'


import './App.css';

class App extends Component {

  state = {
    breakfast: "Waffels"
  }

  // handleClick = () => {
  //   this.setState({breakfast: this.state.breakfast === 'Waffels' ? 'Tofacon' : 'Waffels'})}
  handleClick = () => this.setState({breakfast: 'Tofacon'})
  
  render(){
    return (
      <div className="App">
        <h1>{this.state.breakfast}</h1>
        <Breakfast onClick={this.handleClick} breakfast={this.state.breakfast} />
      </div>
    );
  }
}


export default App;
