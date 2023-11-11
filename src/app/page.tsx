'use client';

import React from 'react';

// Components
import ModelSelect from '@/features/ModelSelect';
import ChatMenu from '@/features/ChatMenu';
import ChatMain from '@/features/ChatMain';
import ChatOffside from '@/features/ChatOffside';

export default function Page() {
  const [showOffside, _] = React.useState(false);
  return (
    <main className="flex w-screen h-screen text-gray-700">
      {/* Model Selection Sidebar */}
      <ModelSelect />

      {/* Chat History & Settings */}
      <ChatMenu />

      {/* Chat Main */}
      <p>Hello World</p>

      {/* Offside  */}
      {showOffside && <ChatOffside />}
    </main>
  );
}
