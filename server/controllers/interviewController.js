const Interview = require("../models/Interview");
const {generateInterviewQuestions} = require("../services/geminiService");
const ai = require("../config/gemini");
const { evaluateAnswer } = require("../services/answerEvaluationService");

const createInterview = async (req, res) => {
  try {
    const { title, role, experience, technology } = req.body;
    const questions = await generateInterviewQuestions(role,experience,technology);

    const interview = await Interview.create({
      title,
      role,
      experience,
      technology,
      questions,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Interview created successfully",
      interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({
      createdBy: req.user.id,
    });

    res.status(200).json({
      success: true,
      count: interviews.length,
      interviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
const deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    await Interview.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Interview deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const submitAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const result = await evaluateAnswer(question, answer);

    res.status(200).json({
      success: true,
      evaluation: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createInterview,
  getMyInterviews,
  getInterviewById,
  deleteInterview,
  submitAnswer,
};