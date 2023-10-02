import React, { useState } from "react";

// Components
import { ChatHistory } from "../ChatHistory";

// Interfaces
interface props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: props) => {
  const [showHistory, setShowHistory] = useState<boolean>(true);
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  return (
    <main className="h-screen overflow-hidden flex flex-row">
      {showHistory && <ChatHistory />}
      <button
        className="absolute top-0 right-0 p-4"
        onClick={() => setShowHistory(!showHistory)}
      >
        Sidebar
      </button>
      <section className="flex flex-col justify-between h-screen max-w-[960px] mx-auto w-full p-4 bg-gradient-to-r from-indigo-100 via-red-100 to-yellow-100">
        {children}
      </section>
    </main>
  );
};

export default Layout;