  import axios from 'axios';
 
 export const getItems = () => dispatch => {
    dispatch( setItemLoading()); 
    axios 
    .get('/api/items')
    .then (res =>  dispatch ( {
      
        type:'GET_ITEMS', 
         payload:res.data
  
    }))
    .catch ( err => {
       console.log( err.response.data);
    })
  }; 

  export const addItem = (item) => dispatch => { 
    axios 
    .post('/api/items' , item)
    .then ( res=>  dispatch ({ 
      
        type:'ADD_ITEM', 
        payload : res.data
    
    }))
    
  }; 

  export const deleteItem = (id) => dispatch => { 
    axios 
    .delete(`/api/items/${id}`)
    .then ( res=>  dispatch ({ 
      
        type:'DELETE_ITEM', 
        payload : id
    
    }))
  }; 

  export const setItemLoading = () => {
    return {
        type:'ITEM_LOADING', 
        
    };
  };