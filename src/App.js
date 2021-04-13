import logo from './logo.svg';
import './App.css';
import React from 'react';


















class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='App'>
        <h1>Timer`s to Do Lists</h1>
        <form>
          <input type="text" placeholder="your task for today"></input>
          <input type="number" placeholder="for how long"></input>
        </form>
        <button>Add task </button>
      </div>
    )
  }

}
export default App;
