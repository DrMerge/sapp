const express = require("express");
const path = require("path");
const engine = require("./engine");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // add this line to serve static files
app.use(express.json());
engine();

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "public", "qr.png")); // Comment out or remove this line
  res.sendFile(path.join(__dirname, "views", "main.html")); // update this line to send the file
});

app.post("/", (req, res) => {
  const botRunning = req.body;
  console.log(botRunning);
  // Handle the botRunning parameter as needed
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
