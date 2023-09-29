import { useState } from "react";

// Tauri imports
import { invoke } from "@tauri-apps/api/tauri";

// Components
import { ChatArea } from "../../features/Chat/ChatArea";
import { ChatHistory } from "../../features/ChatHistory/ChatHistory";

const ChatPage = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("Frederik");
  const [showHistory, setShowHistory] = useState(false);

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container flex flex-row">
      {showHistory && <ChatHistory />}
      <section className="flex flex-col justify-between h-screen w-full p-4">
        <h1
          onClick={() => {
            greet();
            setShowHistory(!showHistory);
          }}
        >
          Welcome to Tauri!
        </h1>
        <a href="/settings">{greetMsg}</a>

        <ChatArea />
      </section>
    </div>
  );
};

export default ChatPage;
