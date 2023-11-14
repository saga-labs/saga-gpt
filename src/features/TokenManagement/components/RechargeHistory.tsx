import React from 'react';
import Link from 'next/link';

// components
import { TokenProgress } from './TokenProgress';

// icons
import { ArrowRight } from '@phosphor-icons/react';

// TODO: implement table to show recharge history
export const RechargeHistory = () => {
  return (
    <div className="w-full space-y-4 border border-gray-200">
      <div className="items-top flex-grow flex-col space-y-2 px-6 pt-4">
        <h2 className="text-lg font-semibold">Billing History</h2>
        <p className="text-sm leading-none text-gray-400">
          Our most popular plan for individuals and smaller teams
        </p>
      </div>

      <TokenProgress />

      <div className="flex flex-grow-0 justify-end space-y-2 border-t p-6">
        <Link
          href={'/'}
          className="flex items-center text-xs uppercase hover:text-green-500"
        >
          Refill Tokens <ArrowRight className="ml-1 w-4" />
        </Link>
      </div>
    </div>
  );
};
