import { useContext } from "react";
import { AppContext } from "../../main";
import ImagePrompt from "./ImagePrompt";
import "./Chats.css";

function Chats({ messages }) {
  const { imageClicked, clickedUrl, clickedText } = useContext(AppContext);
  return (
    <div className="chat-container">
      {imageClicked && <ImagePrompt url = {clickedUrl} text = {clickedText}/>}
      {messages.map((message, index) => (
        <div key={index} className={!imageClicked ? "message message-not" : `message ${message.type}`}>
          <div className="message-content">{message.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Chats;
