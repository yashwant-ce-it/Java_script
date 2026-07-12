import express from "express";

const app = express();
const port = 3000;


app.post("/register", (req, res) => {
    res.status(200).json({ message: "User registered successfully" });
});

app.put("/user", (req, res) => {
    res.status(200).json({ message: "User data updated successfully" });
});

app.get("/yashwant", (req, res) => {
    res.status(200).json({ message: "User data fetched successfully" });
});

app.delete("/delete", (req, res) => {
    res.status(200).json({ message: "User data deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
