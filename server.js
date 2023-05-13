const express = require("express");
const path = require("path");
const engine = require("./engine");
const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.static("public"));
engine();
app.get("/sapp", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "qr.png"));
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
