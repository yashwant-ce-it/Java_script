import express from 'express';
import axios from 'axios';
const port = 3000;
const app = express();



app.get("/", (req, res) => {
    res.render("index.ejs", { content: "Hello" });
});
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/secret-api", asyn(req, res)=> {
    const searchId = req.body.id;
    const searchSecret = req.body.secret;
    try{
        const result = async await(axios.post(API))
    }
})