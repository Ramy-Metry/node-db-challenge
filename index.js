const app=require('./server')
const port=1000

app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})