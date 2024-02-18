import express from 'express';

const app=express(); //create an app

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

//install nodemon for refreshing the server. run npm i nodemon on terminal


