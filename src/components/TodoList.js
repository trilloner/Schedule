import React from 'react';
import {ListGroup} from 'react-bootstrap'
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
        <TodoItem name={item.name} key={index} country={item.position}></TodoItem>
        )
        return(
            <ListGroup>
                {all_items}
            </ListGroup>
        );
    }
}
export default TodoList