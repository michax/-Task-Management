
import './App.css';
import React from 'react';


















class App extends React.Component{
  constructor(props){
    super(props)

    this.inputFieldText= React.createRef();
    this.inputFieldTime= React.createRef();

    this.state = {
      listTasks: [
        {
          // name: 'Nauka Metod tablic w Js',
          // time: 1000,
        }
      ]
    }

  }




  render(){
    return(
      <div className='App'>
        <h1>Timer`s to Do Lists</h1>
        <form>
            <input ref={this.inputFieldText} type="text" placeholder="your task for today"></input>
            <input ref={this.inputFieldTime} type="number" placeholder="for how long"></input>
        </form>
        <button>Add task </button>
      </div>
    )
  }

}
export default App;
