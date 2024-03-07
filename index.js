const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ustp:<password>@cluster0.vpf55az.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connectted to MongoDB..')
})

//ustp
//NytiNA2tX6IDgEwY
const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'),EmployeeRoute);

const UserRoute = require('./Routes/Users.route');
app.use(('/user'),UserRoute)

//Error if wrong endpoint
app.use((req,res,next)=>{
    const err = new Error("NOT FOUND");
    err.status = 404;
    next(err);

});

app.use((err,req,res,next)=>{
    req.status(err.status || 500);
    res.send({
        error: {
            status:err.status|| 500,
            message:err.messsage
        }
    });
});




app.listen(3000,()=>{
    console.log('Listening on Port 3000');
});