import React from 'react';
import TodoList from './TodoList';
import './Footer.css'
class Footer extends React.Component{
constructor  (props){
    super(props)
    this.state ={

    }
}



    render(){
        return(
            <div>
                <div class="one"><h1>YOUR TASKS</h1></div>
                <TodoList items={this.props.items} delElement={this.props.delElement}/> 

            </div>
        );
    }
}

export default Footer;