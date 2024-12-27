import "./LevelOne.css";
import { AppContext } from "../../../main";
import { useContext } from "react";
import { fetchAIResponse } from "../../ChatBox/Gemini";
function LevelOne({ imageOne, imageTwo }) {
  const {
    setMessages,
    setImageClicked,
    setClickedUrl,
    setClickedText,
  } = useContext(AppContext);
  async function imageClick(input, url) {
    setMessages([]);
    setImageClicked(true);
    setClickedText(input);
    setClickedUrl(url);
    const aiResponse = await fetchAIResponse(input);
    setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
  }
  return (
    <div className="level-one">
      <div
        className="img-one-container"
        onClick={() => imageClick(imageOne.text, imageOne.url)}
      >
        <img src={imageOne.url}></img>
        <p>{imageOne.text}</p>
      </div>
      <div
        className="img-two-container"
        onClick={() => imageClick(imageTwo.text, imageTwo.url)}
      >
        <img src={imageTwo.url}></img>
        <p>{imageTwo.text}</p>
      </div>
    </div>
  );
}

export default LevelOne;
