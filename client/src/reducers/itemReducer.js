//  import // import { connect } from 'react-redux'; 
 import  { v4 as uuid } from 'uuid';
     
const initialState = {
    items : [],
    loading: false
  };     


  export default  function ( state=initialState , action) {
      switch(action.type ) {
     case 'GET_ITEMS': 
     return {
         ...state , 
         items: action.payload, 
         loading: false
     } 
     case 'DELETE_ITEM':
        // console.log('d')
         return {
             ...state ,
             items:state.items.filter( item => item._id!==action.payload)
         } 
      case 'ADD_ITEM':  
    //   console.log('s')
      return {
          ...state, 
          items :[ ...state.items , action.payload]
      }   
      case 'ITEM_LOADING':  
        return {
            ...state, 
            loading :true
        }   
     default : 
     return state;

      }
  }