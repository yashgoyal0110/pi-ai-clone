import "./LevelThree.css";
import { AppContext } from "../../../main";
import { fetchAIResponse } from "../../ChatBox/Gemini";
import { useContext } from "react";

function LevelThree({ image }) {
  const { setMessages, setImageClicked, setClickedUrl, setClickedText } =
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
      className="level-three"
      onClick={() => imageClick(image.text, image.url)}
    >
      <img src={image.url}></img>
      <p>{image.text}</p>
    </div>
  );
}

export default LevelThree;
