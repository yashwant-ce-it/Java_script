import bodyParser from "body-parser";
import express from "express";

const app=express();
const port=3000;

const recipeJSON=JSON.stringify("recipe.json");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("solution.ejs");
});
app.post("/recipe", (req, res) => {
    switch(req.body.recipe){
        case "chicken":
        data=JSON.parse(recipeJSON)[0];
        case "beef":
            data=JSON.parse(recipeJSON)[1];
       case "fish":
            data=JSON.parse(recipeJSON)[2];
break;
    });
     res.redirect("/");

     app.listen(port,()=>{
        console.log(`Server is running on port 3000 ${port}...`);
     })