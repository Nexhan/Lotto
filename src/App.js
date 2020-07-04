import React, { Component } from 'react';
import './App.css';
import Lottery from "./Lottery";


class App extends Component{
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title="Pick4" numBalls= {4} maxNum = {10}/>
        <Lottery title="Pick3" numBalls= {3} maxNum = {9} />
      </div>
    )
  }
}

export default App;