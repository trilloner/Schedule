import React from 'react'
import {ListGroup , Accordion , Card, Image} from 'react-bootstrap'


class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }


    render(){
        return(
            // <ListGroup.Item>
            //      <div className='container'>
            //         <div className='row row-header'>
            //             <div className='col-8'>
            //             <p>{this.props.name}</p>
            //             </div>

            //             <div>{this.props.country}</div>
            //         </div>
            //     </div>
            // </ListGroup.Item>
            <Card > 
                <Accordion.Toggle as={Card.Header} eventKey={this.props.hash.toString()} >
                {this.props.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.hash.toString()}>
                 <Card.Body>{this.props.country}</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}
export default TodoItem;