import express from 'express';
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
    app.post("/register",(req,res)=>{
        res.sendStatus(201);
    });
        app.put("/user",(req,res)=>{
            res.sendStatus(200);
        });

        app.get("/yashwant",(req,res)=>{
            res.sendStatus(200);
        });
        
app.delete("/delete",(req,res)=>{
    res.sendStatus(201);
});