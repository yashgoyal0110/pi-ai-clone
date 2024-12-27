import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./PromptBox.css";

function PromptBox({onSendMessage}) {
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal);
    if (inputVal.trim()) {
      onSendMessage(inputVal);
      setInputVal("");
    }
  };
  return (
    <>
      <div className="prompt-box">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              className="input-field"
              placeholder="Talk with Pi"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            ></input>
          </div>
          <button className={!inputVal ? "send-btn" : "send-btn activated"} type="submit">
            <FaArrowUp />
          </button>
        </form>
      </div>
      <div className="bottom-bar">
        By using Pi, you agree to our <span>Terms</span> and{" "}
        <span>Privacy Policy</span>.
      </div>
    </>
  );
}

export default PromptBox;
