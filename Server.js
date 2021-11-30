const express = require('express')

const app = express()

const port = 5000


app.get('/Home', (req, res)=>{
 res.sendFile(__dirname+'/public/navbar.html')

})

app.get('/navbar.css', (req, res)=>{
    res.sendFile(__dirname+'/public/navbar.css')
})

app.get('/Contact', (req, res)=>{
    res.sendFile(__dirname+'/public/contactus.html')
   
   })

   app.get('/Services', (req, res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
   
   })   












app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})