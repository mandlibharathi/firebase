const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const request=require('request')
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')




app.get('/',(req,res)=>{
    res.render('index')
})




app.listen(port=8000,()=>{
    console.log(`server running @ ${port}`)
})














