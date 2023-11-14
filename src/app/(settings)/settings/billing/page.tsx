'use client';

import React from 'react';

// Components
import ModelSelect from '@/features/ModelSelect';
import SettingsSideBar from '@/features/SettingsSideBar';

// feature components
import { RechargeHistory } from '@/features/TokenManagement/components/RechargeHistory';
import { PaymentMethod } from '@/features/TokenManagement/components/PaymentMethod';
import { TokensAvailable } from '@/features/TokenManagement/components/TokensAvailable';

export default function Page() {
  return (
    <main className="flex w-screen h-screen text-gray-700">
      {/* Model Selection Sidebar */}
      <ModelSelect />

      {/* Chat History & Settings */}
      <SettingsSideBar />

      {/* Page Main */}
      <section
        id="billing"
        className="flex flex-col flex-grow overflow-auto space-y-4"
      >
        {/* Chat Header */}
        <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
          <div>
            <h1 className="text font-semibold leading-none">Billing</h1>
            <span className="text-xs leading-none">
              Manage your billing and payment methods
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {/** Tokens Available */}
          <article className="col-span-1 lg:col-span-2">
            <TokensAvailable />
          </article>

          {/** Payment Method */}
          <article className="col-span-1 lg:col-span-2">
            <PaymentMethod />
          </article>

          {/** Recharge History */}
          <article className="col-span-4 lg:col-span-4">
            <RechargeHistory />
          </article>
        </div>
      </section>
    </main>
  );
}
