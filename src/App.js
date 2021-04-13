
import './App.css';
import React from 'react';




class CountDownTimer extends React.Component {

  intervalId=null;

  constructor(props){
    super(props)

    this.state={
      counter: 5, // jak pobrac wartość z this state counter do mojego inputa gdzie wpisuje mój Czas do zadania ?
    }
  }

  componentDidMount(){
    console.log('Uruchumienie licznika', {nazwa:this.props.title})

    this.intervalId=setInterval(()=>{

      console.log('Aktualizuj licznik')
     

      this.setState((prevState)=>{

        if (prevState.counter === 1 ) {
          clearInterval(this.intervalId)
          console.log('Ding!');
        }
        return{
          counter: prevState.counter - 1,
        }
      })
    },1000)

  }


  componentWillUnmount(){
      clearInterval(this.intervalId)
  }
  

  render(){
    return(
      <div>
        <p>Name of Task: {this.props.title} My time: {this.props.counter}</p> 
        <p>Time Remaining: {this.state.counter}</p> 
      </div>
    )
  }

}

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

  handlerAddTask = () => {
    const inputTaskText= this.inputFieldText.current.value;
    const inputTimeTask=this.inputFieldTime.current.value;
    console.log(inputTaskText,inputTimeTask)

    this.setState((prevState)=>{
      const newListTasks = [...prevState.listTasks, {
        name:inputTaskText,
        time:inputTimeTask,
      }]
      return {
        listTasks: newListTasks,
      };
    });
  };



  render(){
    return(
      <div className='App'>
        <h1>Timer`s to Do Lists</h1>
        <form>
            <input ref={this.inputFieldText} type="text" placeholder="your task for today"></input>
            <input ref={this.inputFieldTime} type="number" placeholder="for how long"></input>
        </form>
        <ul>
            {
              this.state.listTasks.map(elem=>{
                return (
                  <CountDownTimer title={elem.name} counter={elem.time}/>
                )
              })
            }
          </ul>
          <button onClick={this.handlerAddTask}>Add task</button>
      </div>
    )
  }

}
export default App;
