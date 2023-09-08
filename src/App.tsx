import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

// Components
import { ChatArea } from "./components/ChatArea";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container mx-auto p-2">
      <section className="flex flex-col justify-between h-screen">
        <h1>Welcome to Tauri!</h1>

        <ChatArea />
      </section>
    </div>
  );
}

export default App;
