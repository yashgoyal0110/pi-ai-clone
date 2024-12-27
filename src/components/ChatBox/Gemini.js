import { GoogleGenerativeAI } from "@google/generative-ai";

export const fetchAIResponse = async (message) => {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBvyNGgPu2ibED7lBj42ICWh5_AmrHhKYI"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = message;

    const result = await model.generateContent(prompt);

    const responseText = result.response.text();

    const cleanedResponse = responseText.replace(/[*]/g, "").trim();

    return cleanedResponse || "Sorry, I couldn't process your request.";
  } catch (error) {
    return "This is Mock response";
  }
};
