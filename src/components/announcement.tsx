'use client';
import React from 'react';

// icons
import { X } from '@phosphor-icons/react';

export const Announcement = () => {
  return (
    <div className="absolute w-full z-50 flex items-center justify-between gap-4 bg-indigo-600 px-4 h-12 text-white">
      <p className="text-sm font-medium">
        For some reason, we couldn't load 😓
      </p>

      <button
        aria-label="Dismiss"
        className="shrink-0 rounded bg-black/10 p-1 transition hover:bg-black/20"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};
