import React from 'react';
import Header from './components/Header'
import Calendar from './components/Calendar'
import ListGroup from './components/TodoList'
import Footer from './components/Footer'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     items:[
       {name: 'hello', position:'home' }
    ]
    }
   
  }

  addElement = (object)=>{
    let temp = this.state.items;
    temp.push(object);

    this.setState({items: temp})

  }


  render(){
  return (
      <div>
     <Header addElement={this.addElement}/>
     <Calendar />
     <Footer items={this.state.items}/>
    
      </div>
 

  );
}
}

export default App;
