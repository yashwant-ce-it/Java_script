import express from 'express';
const app = express();
const port=3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(exprees.json()); 
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.post("/submit", (req, res) => {
    const numberofletters = req.body.["fname"].length+req.body.["lname"].length;
    res.send(`Total number of letters in your name is: ${numberofletters}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});