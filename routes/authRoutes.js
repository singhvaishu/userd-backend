

const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Auth routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

// Protected route 
router.get("/dashboard", protect, (req, res) => {
    res.status(200).json({ message: "Welcome to the dashboard", user: req.user });
});

module.exports = router;
