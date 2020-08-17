import React from 'react';
import Header from './components/Header'
import Calendar from './components/Calendar'
import ListGroup from './components/TodoList'
import Footer from './components/Footer'
import { Button } from 'react-bootstrap';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     items:[
       {name: 'hello', position:'home' , index:0, time:"00:00"}
    ]
    }
   
  }

  addElement = (object)=>{
    let temp = this.state.items;
    temp.push(object);

    this.setState({items: temp})
  }

  delElement = (index) =>{
    let temp = this.state.items;
    temp.splice(index,1)
    
    this.setState({items: temp})
    console.log(index)
  }



  checkZero = (i) =>{


    if (i<10) {i="0" + i};
    return i;
  }
  doneTask = (item) =>{
    let data = new Date();
    let hours = data.getHours();
    let min = data.getMinutes();
    hours = this.checkZero(hours)
    min = this.checkZero(min)
    let str = hours + ':' + min;
    console.log(str); 
    if(item.time > str)
      return true;
    else{
      return false;
    }
  }

  checkTime= ()=>{
    //console.log();
    setInterval(()=>{
    let temp = this.state.items;
    let fin = temp.filter(this.doneTask);
    this.setState({items: fin});
      console.log('OP')  
    } , 60000)
  }

  componentDidMount= () =>{
    window.addEventListener('load', this.checkTime);
  }

  render(){
  return (
      <div>
     <Header addElement={this.addElement} />
     <Calendar />
     <Footer items={this.state.items} delElement={this.delElement}/>
    
      </div>
 

  );
}
}

export default App;
