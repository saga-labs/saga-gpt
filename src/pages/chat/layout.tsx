import React from "react";

// Components
// import { Navbar } from "@/components/Layout/Navbar";
//import { OffsideBar } from "@/components/Layout/OffsideBar";
// import { FeedSelector } from "@/components/FeedSelector/FeedSelector";

// Contexts
// import useCollapsedStore from "@/contexts/CollapsedStore";

// Interfaces
interface props {
    children: React.ReactNode | React.ReactNode[];
  }

export const layout = ({ children }: props) => {
    const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-row flex-grow-1">
        {!isCollapsed && <FeedSelector />}
        <div className="w-full">{children}</div>
        <OffsideBar />
      </div>
    </main>
  );
};
