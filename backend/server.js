const express = require("express");
const app = express();
const router = require("./app"); // import router kamu

const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server berjalan di port " + PORT);
});
