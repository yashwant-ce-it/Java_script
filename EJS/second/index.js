import express from 'express';

const app = express();
const port=3000;
app.get('/', (req, res) => {
    const data={
        type: "EJS TAG",
        second: new Date().getSeconds(),
        items:["yashu","amit","rishab"],
        htmlContent:"<strong> This is a strong text </strong>",
    };
    res.render('index', data);
    });

app.listen(port,() => {
    console.log(`Server is running on port ${port}...`);
});