'use client';

import '../globals.css';
import clsx from 'clsx';
import { useState } from 'react';
import { Inter } from 'next/font/google';

import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// Components
import { ChatSideBar } from '../../src/features/ChatSideBar';

// Icons
import { ViewVerticalIcon } from '@radix-ui/react-icons';

// Interfaces
interface props {
  children: React.ReactNode | React.ReactNode[];
}

export default function RootLayout({ children }: props) {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [fullWidth, _] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen overflow-y-scroll overflow-x-hidden flex flex-row bg-gradient-to-r from-indigo-100 via-red-100 to-yellow-100">
          {showHistory && (
            <ChatSideBar
              path={pathname}
              active={showHistory}
              setShowHistory={setShowHistory}
            />
          )}

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
              'container flex flex-col justify-between h-screen mx-auto w-full p-4',
              !fullWidth && 'max-w-[960px]'
            )}
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
