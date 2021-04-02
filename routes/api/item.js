 const express = require('express'); 
 const router = express.Router(); 

 //item model 

 const Item = require ('../../modelss/Item');  

 // @rotue GET api/tems 
 // @dsec get all items
  router.get('/' , (req,res)=>{
    Item.find()
        .sort( { date :-1 })
        .then ( items => res.json(items));
  }) 

  // @rotue Post api/tems 
 // @dsec  create an item
 router.post('/' , (req,res)=>{
    const newItem = new Item ({ 
        name : req.body.name
    })

    newItem.save()
           .then ( item => res.json(item) );
  }) 

   

 // @rotue DELETE api/tems/:id 
 // @dsec delete  a item
 router.delete('/:id' , (req,res)=>{
    Item.findById(req.params.id) 
        .then ( item =>   
            item.remove()
                 .then ( ()=> res.json({ success: true }) )
        ) 
        .catch ( error => res.status(404).json( {success:false}));
        
  })

 module.exports = router; 


