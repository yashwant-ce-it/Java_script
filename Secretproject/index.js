import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Public/index12.html");
});

app.post("/check", (req, res) => {
    const password = req.body.password;
    if (password === "Yashu") {
        res.sendFile(__dirname + "/Public/secret.html");
    } else {
        res.sendFile(__dirname + "/Public/index12.html");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});