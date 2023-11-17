'use client';

import React from 'react';

// components
import { ModelCard } from '@/features/ModelGrid/components/model-card';

// interfaces & types
import { ModelType } from '@/features/ModelGrid/interfaces/model';

// data
import models from '@/features/ModelGrid/mock/models.json';

export default function Page() {
  return (
    <main className="flex w-screen h-screen text-gray-700">
      <section className="flex flex-col flex-grow overflow-auto space-y-4">
        {/* Chat Header */}
        <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
          <div>
            <h1 className="text font-semibold leading-none">Model Selection</h1>
            <span className="text-xs leading-none">damn</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {models.map((model: ModelType, key: React.Key) => (
            <ModelCard model={model} key={key} />
          ))}
        </div>
      </section>
    </main>
  );
}
