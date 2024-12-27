import { useContext, useState } from "react";
import "./ChatBox.css";
import { HiSpeakerXMark } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { fetchAIResponse } from "./Gemini";
import PromptBox from "./PromptBox";
import Chats from "../Chats/Chats";
import { AppContext } from "../../main";

function ChatBox() {
  const [speakerClick, setSpeakerClick] = useState(false);
const {messages, setMessages} = useContext(AppContext)

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
