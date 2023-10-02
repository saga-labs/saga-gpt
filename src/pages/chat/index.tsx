import { useState } from "react";

// Tauri imports
import { invoke } from "@tauri-apps/api/tauri";

// Global components
import Layout from "../../features/Layout";

// Feature Components
import { ChatInput } from "../../features/ChatInput";
import { Message } from "../../features/ChatMsg";

interface ChatAppProps {}

const ChatPage: React.FC<ChatAppProps> = () => {
  // const [greetMsg, setGreetMsg] = useState("");

  // prettier-ignore
  const [messages, setMessages] = useState([
    { sender: "Frederik", content: "Hey, how's it going?" },
    { sender: "GPT-4", content: "Hi! It's going well. I just got back from a weekend camping trip." },
    { sender: "Frederik", content: "That sounds awesome! Tell me more about it." },
    { sender: "GPT-4", content: 
    "Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night. Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.   " 
  },
  ]);

  // async function greet() {
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  // Message Handler
  const handleSendMessage = (message: string) => {
    // Add a new message to the chat
    const newMessage = { sender: "Frederik", content: message };
    setMessages([...messages, newMessage]);
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
            isUser={message.sender === "Frederik"}
          />
        ))}
      </div>

      <ChatInput handler={handleSendMessage} />
    </Layout>
  );
};

export default ChatPage;
