import React from 'react';

// components
import { ModelCard } from './components/model-card';

// interfaces & types
import { ModelType } from './interfaces/model';

// data
import models from './mock/models.json';

const ModelGrid = () => {
  return (
    <section className="flex flex-col flex-grow overflow-auto space-y-4 p-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {models.map((model: ModelType, key: React.Key) => (
          <ModelCard model={model} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ModelGrid;
