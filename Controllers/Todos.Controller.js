const TodosRouter = require('express').Router();


TodosRouter.get('/', (request, response, next) => {
    
     console.log('REQUEST HIT');
     let data = require('../mocks/users.json');
     return response.status(200).json({
       users: data,
       length: data.length
     });
 
   
   });

TodosRouter.get('/:id', (request, response, next) => {
    
     const { id } = request.params;
      console.log('REQUEST HIT');
      let data = require('../mocks/users.json');
      let filteredData = data.filter((item) => Number(item.id) === Number(id))
      return response.status(200).json({
        users: filteredData,
        length: filteredData.length
      });
  
    
    });


module.exports = TodosRouter;