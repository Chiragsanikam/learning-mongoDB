//this file is responsible for creating the relation between nodejs and mongodb via mongoose library
const mongoose= require('mongoose');
const mongoUrl='mongodb://127.0.0.1:27017/chirag'
mongoose.connect(mongoUrl)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongo db server")
})

db.on("error", (err)=>{
console.error("error", err)
})

db.on("disconnected", ()=>{
    console.log('mongodb disconnected')
})

module.exports=db;