import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.text({ type: "text/html" }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Welcome to Files Provider !");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
