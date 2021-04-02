import  { v4 as uuid } from 'uuid';
import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../action/itemAction';
// import { IItemReduxProps, IItemModal, ITarget } from '../types/interfaces';
//dffmfmfknvj jnjfndsdssdudbsudsbdsbds dsdsbvdbdfubv
  class ItemModel extends Component {
      state = { 
          modal : false, 
          name:''
        }
        
        toggle =()=>{ 
            this.setState ({ 
                modal : !this.state.modal
            })
        }
 
        onChange =(e)=>{ 
           this.setState ({ [e.target.name]:e.target.value })
       } 


       handleSubmit=(e)=>{ 
        e.preventDefault();
            const newItem ={ 
              
                name:this.state.name
            } 
            //  console.log( newItem);
           this.props.addItem(newItem);
 

           // close model  
           this.toggle();
        }

     render() {   
       return (
       <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
     

      <Modal 
      isOpen={this.state.modal} 
      toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={this. onChange}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
  } 

  const mapStatetoprops =( state)=>({ 
      item : state.item
  })
   
  export default  connect( mapStatetoprops , { addItem})(ItemModel);