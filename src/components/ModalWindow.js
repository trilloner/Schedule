import React from 'react';
import {Modal, Button, Form , InputGroup , FormControl} from 'react-bootstrap'


class ModalWindow extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            position: '',
            index:1,
            time: ''
        }
       
      }

      handlerEventName=event=>{
        //   let index = this.state.index;
        //   let temp = index+1;
        this.setState({name: event.target.value })
      }
      handlerEventPos = event =>{
        this.setState({position: event.target.value})
      }
      
      counter=()=>{
          let index = this.state.index;
          let temp = index+1;
          this.setState({index:temp})

      }

      handlerEventTime =event =>{
        this.setState({time: event.target.value })
        console.log(event.target.value)
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
        
            <FormControl type='time' onChange={this.handlerEventTime}></FormControl>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=> {this.props.updateData(false)}} variant="secondary">
                    Close
                </Button>
                <Button onClick={()=>{this.props.addElement({name: this.state.name , position: this.state.position, index:this.state.index , time:this.state.time});this.props.updateData(false);this.counter()}}>
                    Submit
                </Button>

            </Modal.Footer>

            </Modal>

            </div>
        );
    }
}

export default ModalWindow