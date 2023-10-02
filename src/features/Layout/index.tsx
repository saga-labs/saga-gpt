import React, { useState } from "react";
import clsx from "clsx";

// Components
import { ChatHistory } from "../ChatHistory";

// Icons
import { ViewVerticalIcon } from "@radix-ui/react-icons";

// Interfaces
interface props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: props) => {
  const [showHistory, setShowHistory] = useState<boolean>(true);
  const [fullWidth, setFullWidth] = useState<boolean>(false);

  return (
    <main className="h-screen overflow-hidden flex flex-row bg-gradient-to-r from-indigo-100 via-red-100 to-yellow-100">
      {showHistory && <ChatHistory />}
      {!showHistory && (
        <button
          className="absolute top-4 left-4 p-2 z-50 rounded bg-white border"
          onClick={() => setShowHistory(!showHistory)}
        >
          <ViewVerticalIcon className="w-4 h-4" />
        </button>
      )}

      <section
        className={clsx(
          "container flex flex-col justify-between h-screen  mx-auto w-full p-4 pt-16",
          !fullWidth && "max-w-[960px]"
        )}
        onClick={() => setShowHistory(false)}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
