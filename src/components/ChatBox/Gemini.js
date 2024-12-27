import { GoogleGenerativeAI } from "@google/generative-ai";
export const fetchAIResponse = async (message) => {
    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBvyNGgPu2ibED7lBj42ICWh5_AmrHhKYI"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = message;

      const result = await model.generateContent(prompt);
      console.log("result", result.response.text());

      return (
        result.response.text() || "Sorry, I couldn't process your request."
      );
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Oops! Something went wrong. Please try again.";
    }
  };