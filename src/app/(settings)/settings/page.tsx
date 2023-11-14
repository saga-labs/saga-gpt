'use client';

import React from 'react';

// Components
import ModelSelect from '@/features/ModelSelect';
import SettingsSideBar from '@/features/SettingsSideBar';
import ModelGrid from '@/features/ModelGrid';
import ChatOffside from '@/features/ChatOffside';

// feature components
import { RechargeHistory } from '@/features/TokenManagement/components/RechargeHistory';
import { PaymentMethod } from '@/features/TokenManagement/components/PaymentMethod';
import { TokensAvailable } from '@/features/TokenManagement/components/TokensAvailable';

export default function Page() {
  const [showOffside, _] = React.useState(false);
  return (
    <main className="flex w-screen h-screen text-gray-700">
      {/* Model Selection Sidebar */}
      <ModelSelect />

      {/* Chat History & Settings */}
      <SettingsSideBar />

      {/* Page Main */}
      <ModelGrid />

      {/* Offside  */}
      {showOffside && <ChatOffside />}
    </main>
  );
}
