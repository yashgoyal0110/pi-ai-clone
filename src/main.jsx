import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hey there! 👋 What's up? Is there anything I can help you with?",
    },
  ]);
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        inputVal,
        setInputVal,
        messages,
        setMessages,
        imageClicked,
        setImageClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
