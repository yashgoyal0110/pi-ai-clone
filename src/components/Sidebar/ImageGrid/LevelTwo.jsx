import { useContext } from "react";
import "./LevelTwo.css";
import { AppContext } from "../../../main";
import { fetchAIResponse } from "../../ChatBox/Gemini";

function LevelTwo({ image }) {
  const { setMessages, setImageClicked, setClickedText, setClickedUrl } =
    useContext(AppContext);
  async function imageClick(input, url) {
    setMessages([]);
    setImageClicked(true);
    setClickedText(input);
    setClickedUrl(url);
    const aiResponse = await fetchAIResponse(input);
    setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
  }
  return (
    <div
      className="level-two"
      onClick={() => imageClick(image.text, image.url)}
    >
      <p>{image.text}</p>
      <div className="level-two-image-container">
        <img src={image.url}></img>
      </div>
    </div>
  );
}

export default LevelTwo;
