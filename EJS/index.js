import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const today = new Date();
const day = today.getDay();

let type = "A weekday";
let adv = "Have a good day!";

if (day === 0 || day === 6) {
    type = "A weekend";
    adv = "Relax and enjoy your weekend!";
}

app.get("/", (req, res) => {
    res.render("solution.ejs", {
        datatype: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});