import React, { Component } from 'react'; 
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import  { v4 as uuid } from 'uuid';
import { connect} from 'react-redux'; 
import {getItems , deleteItem , addItem} from '../action/itemAction'; 
import Proptypes from 'prop-types';
import ItemModel from './itemModel';


class ShoppingList extends Component {
    

    componentDidMount () {
         this.props.getItems();
    } 

    handleDelete=( id)=> {
         this.props.deleteItem(id);
    }

    render() {   

        const { items } = this.props.item;
        return (  
            <Container> 
                 <ItemModel/>
                <ListGroup>
                <TransitionGroup className="shopping-list">
                       {items.map(({ _id, name }) => ( 
                     <CSSTransition key={_id} timeout={500} classNames="fade">
                      <ListGroupItem>
                
                        <Button
                         className="remove-btn"
                         color="danger"
                         size="sm"
                         onClick={() =>this.handleDelete(_id)}
                         >
                         &times;
                        </Button> 
                       {name}
                    </ListGroupItem>
                   </CSSTransition>
                   ))}
               </TransitionGroup>
                </ListGroup>
            </Container>
         );
    }
}  

ShoppingList.prototypes = { 
     getItems :  Proptypes.func.isRequired, 
     item:Proptypes.object.isRequired
}

const  mapStateToProps =(state) =>({ 
    item : state.item
})
 
export default connect(mapStateToProps , {getItems , deleteItem })(ShoppingList);