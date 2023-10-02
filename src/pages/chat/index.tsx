import { useState } from "react";

// Tauri imports
import { invoke } from "@tauri-apps/api/tauri";

// Global components
import Layout from "../../features/Layout/Layout";

// Feature Components
import { ChatInput } from "../../features/ChatInput";
import { Message } from "../../features/ChatMsg";

interface ChatAppProps {}

const ChatPage: React.FC<ChatAppProps> = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("Frederik");

  // Messages
  const [messages, setMessages] = useState([
    { sender: "User1", content: "Hey, how's it going?" },
    { sender: "User2", content: "Hi! It's going well. I just got back from a weekend camping trip." },
    { sender: "User1", content: "That sounds awesome! Tell me more about it." },
    { sender: "User2", content: "Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night." },
    // { sender: "User1", content: "Sounds like a perfect getaway! Did you see any wildlife?" },
    // { sender: "User2", content: "Yes, we spotted some deer and even saw a bald eagle soaring above the lake. It was breathtaking." },
    // { sender: "User1", content: "Wow, that's amazing! I've always wanted to see a bald eagle in the wild." },
    // { sender: "User2", content: "It was a once-in-a-lifetime moment, for sure. How have you been lately?" },
  ]);
  
  // Message Handler
  const handleSendMessage = (message: string) => {
    // Add a new message to the chat
    const newMessage = { sender: "User1", content: message };
    setMessages([...messages, newMessage]);
  };

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Layout>
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
            isUser={message.sender === "User1"}
          />
        ))}
      </div>
      <ChatInput handler={handleSendMessage} />
    </Layout>
  );
};

export default ChatPage;
