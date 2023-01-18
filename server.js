const express=require('express')
const app=express()
const port = process.env.PORT 

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const dbConnection = require('./db')

app.use(express.json())

app.use('/post',require('./routes/postRoute'))
app.use('/comment',require('./routes/commentRoute'))
app.use('/category',require('./routes/categoryRoute'))
app.use('/user',require('./routes/userRoute'))


const path = require('path')




    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })






  
  app.listen(port, () => 
    console.log(`Node js server started  at http://localhost:${port}`)
  )
  
