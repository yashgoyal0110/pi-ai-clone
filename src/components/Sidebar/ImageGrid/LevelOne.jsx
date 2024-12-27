import "./LevelOne.css";
import { AppContext } from "../../../main";
import { useContext } from "react";
import { fetchAIResponse } from "../../ChatBox/Gemini";
function LevelOne({ imageOne, imageTwo }) {
  const { setMessages } = useContext(AppContext);
  async function imageClick(input) {
    setMessages((prev) => [...prev, { type: "user", content: `${input}` }]);
    const aiResponse = await fetchAIResponse(input);
    setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
  }
  return (
    <div className="level-one">
      <div
        className="img-one-container"
        onClick={() => imageClick(imageOne.text)}
      >
        <img src={imageOne.url}></img>
        <p>{imageOne.text}</p>
      </div>
      <div
        className="img-two-container"
        onClick={() => imageClick(imageTwo.text)}
      >
        <img src={imageTwo.url}></img>
        <p>{imageTwo.text}</p>
      </div>
    </div>
  );
}

export default LevelOne;
