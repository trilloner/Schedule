import React from 'react';
import {ListGroup , Accordion, Card} from 'react-bootstrap'
import TodoItem from './TodoItem'



class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
      

        }
    }

    render(){
        const items = this.props.items;
        const all_items=items.map((item, index) => 
        <TodoItem name={item.name} key={index} country={item.position} hash={item.index} time={item.time} delElement={this.props.delElement}></TodoItem>
        )
        return(
            <Accordion>
                {all_items}
            </Accordion>
            
        );
    }
}
export default TodoList