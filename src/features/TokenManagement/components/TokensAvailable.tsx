import React from 'react';
import Link from 'next/link';

// components
import { TokenProgress } from './TokenProgress';

// icons
import { ArrowRight } from '@phosphor-icons/react';

export const TokensAvailable = () => {
  return (
    <div className="w-full space-y-4 border border-gray-200">
      <div className="items-top flex-col space-y-2 px-6 pt-4">
        <h2 className="text-lg font-semibold">Tokens</h2>
        <p className="text-sm leading-none text-gray-400">
          Our token system serves as a means of payment for accessing our
          services.
        </p>
      </div>

      <TokenProgress />

      <div className="flex h-16 items-center justify-end border-t p-6">
        <Link
          href={'/'}
          className="flex items-center text-xs uppercase hover:text-green-500"
        >
          Recharge <ArrowRight className="ml-1 w-4" />
        </Link>
      </div>
    </div>
  );
};
