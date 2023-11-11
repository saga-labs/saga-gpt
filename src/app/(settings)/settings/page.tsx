'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import ModelSelect from '@/features/ModelSelect';
import ChatOffside from '@/features/ChatOffside';
import SettingsSideBar from '@/features/SettingsSiderBar';

export default function Page() {
  const [showOffside, _] = React.useState(false);
  return (
    <main className="flex w-screen h-screen text-gray-700">
      {/* Model Selection Sidebar */}
      <ModelSelect />

      {/* Chat History & Settings */}
      <SettingsSideBar />

      {/* Page Main */}
      <section className="flex flex-col flex-grow overflow-auto space-y-4 p-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {[...Array(12)].map((_, i) => (
            <ModelCard key={i} />
          ))}
        </div>
      </section>

      {/* Offside  */}
      {showOffside && <ChatOffside />}
    </main>
  );
}

export const ModelCard = () => {
  return (
    <Link href={'/feed'}>
      <article className="rounded border border-gray-100 bg-gray-100 p-4 shadow-sm transition sm:p-6">
        <div className="relative w-10 h-10 rounded-md hover:rounded-lg hover:shadow border bg-white/70 border-gray-300 flex items-center justify-center">
          <Image src={'/openai.png'} alt={'model'} width={28} height={28} />
        </div>

        <h3 className="mt-2 text-lg font-medium text-gray-900">
          GPT-3.5 Turbo
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Stay informed about the industrial sector with this watchlist. Follow
          the performance of key players in manufacturing, transportation, and
          infrastructure. Gain insights into market movements and emerging
          trends.
        </p>

        <span className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Setup
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5"
          >
            &rarr;
          </span>
        </span>
      </article>
    </Link>
  );
};
