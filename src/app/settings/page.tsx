'use client';

import React from 'react';

export default function Page() {
  return (
    <main className="flex w-screen h-screen text-gray-700">
      <section className="flex flex-col flex-grow overflow-auto space-y-4">
        {/* Chat Header */}
        <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
          <div>
            <h1 className="text font-semibold leading-none">
              General Settings
            </h1>
            <span className="text-xs leading-none">damn</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <p>General Settings</p>
        </div>
      </section>
    </main>
  );
}
