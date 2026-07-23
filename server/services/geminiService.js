const ai = require("../config/gemini");

const generateInterviewQuestions = async (role, experience, technology) => {
  const prompt = `
Generate 10 technical interview questions.

Role: ${role}
Experience: ${experience} years
Technologies: ${technology.join(", ")}

Return only the questions in a numbered list.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateInterviewQuestions,
};