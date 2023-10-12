'use client';

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

// Local Components
import { Message } from '@/features/ChatMsg';
import { ChatInput } from '@/features/ChatInput';

// Icons
import {
  MagicWandIcon,
  ExclamationTriangleIcon,
  Share2Icon,
} from '@radix-ui/react-icons';

export default function Home() {
  // prettier-ignore
  const [messages, setMessages] = useState([
      { sender: "Frederik", content: "Hey, how's it going?" },
      { sender: "GPT-4", content: "Hi! It's going well. I just got back from a weekend camping trip." },
      { sender: "Frederik", content: "That sounds awesome! Tell me more about it." },
      { sender: "GPT-4", content: 
      "Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night. Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.Sure, it was a beautiful experience. We camped by the lake, did some hiking, and had a bonfire at night.   " 
    },
  ]);

  // Message Handler
  const handleSendMessage = (message: string) => {
    // Add a new message to the chat
    const newMessage = { sender: 'Frederik', content: message };
    setMessages([...messages, newMessage]);
  };

  // todo: remove this
  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <>
      {/* action buttons */}
      <div className=''>
        <div className="flex flex-row justify-end space-x-1 pb-4">
          <button className="left-4 p-2 z-50 rounded bg-white border">
            <ExclamationTriangleIcon className="w-4 h-4" />
          </button>
          <button className="p-2 z-50 rounded bg-white border">
            <Share2Icon className="w-4 h-4" />
          </button>
          <button className="p-2 z-50 rounded bg-white border">
            <MagicWandIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-col space-y-1">
          {messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              content={message.content}
              isUser={message.sender === 'Frederik'}
            />
          ))}
        </div>
      </div>

      {/* chat input */}
      <ChatInput handler={handleSendMessage} />
    </>
  );
}
