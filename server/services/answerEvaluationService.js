const ai = require("../config/gemini");

const evaluateAnswer = async (question, answer) => {
  const prompt = `
You are an expert technical interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer and provide:

1. Score out of 10
2. Strengths
3. Weaknesses
4. Correct Answer
5. Final Feedback
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  evaluateAnswer,
};