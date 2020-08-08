import React from 'react'
import {ListGroup} from 'react-bootstrap'


class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }


    render(){
        return(
            <ListGroup.Item>
                 <div className='container'>
                    <div className='row row-header'>
                        <div className='col-8'>
                        <p>{this.props.name}</p>
                        </div>

                        <div>{this.props.country}</div>
                    </div>
                </div>
            </ListGroup.Item>
        );
    }
}
export default TodoItem;