const app=require("./app");

const connection=require('./db/connection');

app.get("/",(req,res)=>{
    res.send('hello dear');
});

const port = 3008;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});