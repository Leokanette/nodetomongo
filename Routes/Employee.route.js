const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send('List of all employees');
});

router.get('/',(req,res,next)=>{
    next(new Error("Cannot get new employee"));

});

router.post('/',(req,res,next)=>{
        res.send('Create a new employee');
    
});

router.get('/:id',(req,res,next)=>{
    res.send('Create a single employee');

});

router.patch('/:id',(req,res,next)=>{
    res.send('Patch a single employee');

});

router.delete('/:id',(req,res,next)=>{
    res.send('Delete a single employee');

});

module.exports = router;
