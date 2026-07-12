import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Initialize app BEFORE calling app.use
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html on "/"
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/PUBLIC/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Form data received!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
