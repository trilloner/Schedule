import React from 'react';
import {Modal, Button, Form , InputGroup , FormControl} from 'react-bootstrap'



class ModalWindow extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            position: ''
        }
       
      }

      handlerEventName=event=>{
        this.setState({name: event.target.value})
      }
      handlerEventPos = event =>{
        this.setState({position: event.target.value})
      }
      
    render(){
        return(
            <div>
            <Modal show={this.props.isShow} onHide= {()=> {this.props.updateData(false)}}>
            <Modal.Header closeButton>Create task</Modal.Header>
            <Modal.Body>
            <Form>
 
            <FormControl
            placeholder="Task"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handlerEventName}
            /> 

            <FormControl
            placeholder="Where"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handlerEventPos}

            />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=> {this.props.updateData(false)}} variant="secondary">
                    Close
                </Button>
                <Button onClick={()=>{this.props.addElement({name: this.state.name , position: this.state.position});this.props.updateData(false) }}>
                    Submit
                </Button>

            </Modal.Footer>

            </Modal>

            </div>
        );
    }
}

export default ModalWindow