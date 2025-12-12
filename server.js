const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// ===== BACKEND API (opsional) =====
try {
  const backend = require("./backend/app.js");
  app.use("/api", backend);
} catch (err) {
  console.log("Backend tidak ditemukan, server hanya menjalankan frontend");
}

// ===== FRONTEND BUILD =====
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
