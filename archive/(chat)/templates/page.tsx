'use client';

import { useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

// Local Components
// import { Test } from '@/components/test'

export default function Home() {
  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      templates
    </main>
  );
}
