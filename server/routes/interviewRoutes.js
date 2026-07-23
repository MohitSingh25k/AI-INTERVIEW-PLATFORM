const express = require("express");
console.log("Interview Routes Loaded");

const router = express.Router();
const { createInterview,getMyInterviews,getInterviewById,deleteInterview,submitAnswer,} = require("../controllers/interviewController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Interview Route Working",
  });
});
router.post("/", authMiddleware,createInterview);
router.get("/my", authMiddleware,getMyInterviews);
router.get("/:id", authMiddleware,getInterviewById);
router.delete("/:id", authMiddleware,deleteInterview);
router.post("/:id/answer", authMiddleware, submitAnswer);
module.exports = router;