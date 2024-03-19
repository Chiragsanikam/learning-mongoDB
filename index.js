const express = require('express')
const app = express()
const port = 3000
const Person=require('./models/person')
const db=require('./db')
const bodyParser=require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {

  res.send('server is working')
})


app.post('/person', async (req,res)=>{
  const data= req.body;
  const newPerson= new Person(data) //pass the data variable 

  try{
   const savedPerson= await newPerson.save()
   res.send(savedPerson);
   return;

  }
  catch(err){
    res.send(err)
    return;
  }
})

app.get('/data', async (req,res)=>{
const name =req.body;


try{

const response= await Person.find(name)
res.send(response)
}catch(err){
  res.send(err)
}

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
