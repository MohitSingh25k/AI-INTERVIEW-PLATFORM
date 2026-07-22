const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        success: true,
        user: req.user,
    });
});

module.exports = router;