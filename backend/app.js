const express = require("express");
const router = express.Router();

// Contoh API
router.get("/", (req, res) => {
  res.json({ message: "Backend aktif dan berjalan!" });
});

module.exports = router;
