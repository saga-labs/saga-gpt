'use client';

import React from 'react';

// components
import { ModelCard } from '@/features/ModelGrid/components/model-card';

// interfaces & types
import { ModelType } from '@/features/ModelGrid/interfaces/model';

// data
import models from '@/features/ModelGrid/mock/models.json';
import { ModelContainer } from '@/features/ModelGrid/components/model-container';

export default function Page() {
  const configuredModels = models.slice(0, 5);
  const closedsourceModels = models.filter(
    (model: ModelType) => model.openSource === false
  );
  const opensourceModels = models.filter(
    (model: ModelType) => model.openSource === true
  );

  return (
    <main className="flex w-screen h-screen text-gray-700">
      <section className="flex flex-col flex-grow overflow-auto">
        {/* Added/Configured Models */}
        <section className="pb-4 space-y-4">
          <div className="flex items-center flex-shrink-0 h-16 border-b px-4">
            <div>
              <h1 className="text font-semibold leading-none">Added Models</h1>
              <span className="text-xs leading-none">
                Discover and manage your personalized AI models.
              </span>
            </div>
          </div>
          <ModelContainer models={configuredModels} />
        </section>

        {/* Closed Source Models available */}
        <section className="pb-4 space-y-4">
          <div className="flex items-center flex-shrink-0 h-16 border-y px-4">
            <div>
              <h1 className="text font-semibold leading-none">
                Closed Source Models
              </h1>
              <span className="text-xs leading-none">
                Unleash the power of cutting-edge closed-source models.
              </span>
            </div>
          </div>
          <ModelContainer models={closedsourceModels} />
        </section>

        {/* Open Source Models available */}
        <section className="border-b pb-4 space-y-4">
          <div className="flex items-center flex-shrink-0 h-16 border-y px-4">
            <div>
              <h1 className="text font-semibold leading-none">
                Open Source Models
              </h1>
              <span className="text-xs leading-none">
                Explore the possibilities with transparent and open-source AI
                models.
              </span>
            </div>
          </div>
          <ModelContainer models={opensourceModels} />
        </section>
      </section>
    </main>
  );
}
