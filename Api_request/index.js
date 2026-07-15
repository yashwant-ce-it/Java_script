import express from 'express';
import body-parsher from 'body-parser';
import axios from "axios";
 
const app=express();
const port =3000;
import axios from "axios";

app.get("/", async (req, res) => {
    try {
        const request = await axios.get("https://api.example.com/data");
        res.render("index.ejs", { data: request.data });
        const result=response.data;
    } catch (error) {
        console.log("Failed to match",error );
        res.status(500).send("Error fetching data");
    }
    });


app.listen(port,(req,res)=>{
console.log(`server is running on port ${port}`);
});