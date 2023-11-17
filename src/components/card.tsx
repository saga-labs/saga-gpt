import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="rounded border border-gray-200 bg-gray-50 p-4 transition sm:p-6 h-full">
      {children}
    </article>
  );
};
