import { useState } from "react";
import "./ChatBox.css";
import { HiSpeakerXMark } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { GoogleGenerativeAI } from "@google/generative-ai";
import PromptBox from "./PromptBox";
import Chats from "../Chats/Chats";

function ChatBox() {
  const [speakerClick, setSpeakerClick] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hey there! 👋 What's up? Is there anything I can help you with?",
    },
  ]);

  const fetchAIResponse = async (message) => {
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

  const handleSendMessage = async (message) => {
    setMessages([...messages, { type: "user", content: message }]);
    const aiResponse = await fetchAIResponse(message);
    setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
  };

  const handleImageClick = async (title) => {
    const aiResponse = await fetchAIResponse(title);
    setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
  };

  function handleSpeaker() {
    setSpeakerClick(!speakerClick);
  }
  return (
    <>
      <div className="chat-box">
        <div className="speaker-icon" onClick={() => handleSpeaker()}>
          {!speakerClick ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </div>
        <Chats messages={messages} />
        <PromptBox onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}

export default ChatBox;
