import React from 'react';
import './Header.css'
import ModalWindow from './ModalWindow'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
         date: new Date(),
         modalShow: false
        }
       
      }
      //callback function for closing modal
      update = (value) =>{
          this.setState({modalShow: value})
      }



     
    render(){
        return(
            
        <div className='container'>
            <div className='row row-header'>
                <div className='col-8 col-sm-6 plus'> {this.state.date.toLocaleDateString()}</div>
                <div className='col-4 col-sm-6'>
                    <div className='row row-header'>
                        
                        <div className='plus' onClick={()=> this.update(true)}> +</div>
                       
                        <div className='plus' id='more'> &#8230;</div>
                    </div>
                    
                </div>

            </div>
            <ModalWindow updateData={this.update} isShow={this.state.modalShow} addElement={this.props.addElement}></ModalWindow>
        </div>
        
        );
    }
}
export default Header