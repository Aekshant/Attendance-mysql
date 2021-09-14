
const express = require('express');
const app = express();
const config = require('./dbconfig'); 
const mysql = require('mysql');
const userRouter = require("./api/users/userRouter")
const geofenceRouter = require("./api/geofence/geofenceRouter")
app.use(express.json()); 
app.use("/api/staffs", userRouter);
app.use("/api/geofence" ,geofenceRouter);

app.listen(3000,()=>{
    console.log("server at 3000")
});