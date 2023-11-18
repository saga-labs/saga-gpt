'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import { TokenProgress } from '@/features/Billing/components/token-progress';
import { RechargeTable } from '@/features/Billing/components/recharge-table';
import { PricingOptions } from '@/features/Billing/components/pricing-options';

// icons
import { ArrowRight, Pencil } from '@phosphor-icons/react';

export default function Page() {
  return (
    <main className="flex w-screen h-screen text-gray-700">
      <section className="flex flex-col flex-grow overflow-auto space-y-4">
        {/* Chat Header */}
        <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
          <div>
            <h1 className="text font-semibold leading-none">Billing</h1>
            <span className="text-xs leading-none">damn</span>
          </div>
        </div>

        <section
          id="billing"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 overflow-auto"
        >
          {/** Tokens Available */}
          <article className="w-full space-y-4 border border-gray-200 col-span-2">
            <div className="items-top flex-col space-y-2 px-6 pt-4">
              <h2 className="text-lg font-semibold">Tokens Usage</h2>
              <p className="text-sm leading-none text-gray-400">
                Our token system serves as a means of payment for accessing our
                top-notch data analytics services. It is entirely optional, as
                clients may choose to implement their own services.
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
          </article>

          {/** Payment Plans */}
          <article className="w-full space-y-4 border border-gray-200 col-span-2">
            <div className="items-top flex-col space-y-2 px-6 pt-4">
              <h2 className="text-lg font-semibold">Recharge Method</h2>
              <p className="text-sm leading-none text-gray-400">
                Manage your payment methods here
              </p>
            </div>

            <div className="p-4">
              <div className="flex space-x-2 rounded border bg-neutral-50 p-4 shadow-sm">
                <Image
                  src="https://logo.clearbit.com/visa.com"
                  alt="hello"
                  width={70}
                  height={50}
                />

                <div className="flex flex-col justify-center">
                  <input
                    type="text"
                    id=""
                    value="**** **** **** 1234"
                    className="w-full border-none bg-transparent p-0 outline-none"
                    readOnly
                  />
                  <p>Expires 04/24</p>
                </div>

                <Pencil className="h-5 w-5 text-gray-700" />
              </div>
            </div>

            <div className="flex h-16 shrink-0 justify-end space-y-2 border-t p-6">
              <Link
                href={'/'}
                className="flex items-center text-xs uppercase hover:text-green-500"
              >
                Refill Tokens <ArrowRight className="ml-1 w-4" />
              </Link>
            </div>
          </article>

          {/** Subscription  */}
          <article className="w-full space-y-4 border border-gray-200 col-span-4">
            <div className="items-top flex-grow flex-col space-y-2 px-6 pt-4">
              <h2 className="text-lg font-semibold">Subscription</h2>
              <p className="text-sm leading-none text-gray-400">
                Our most popular plan for individuals and smaller teams
              </p>
            </div>

            <PricingOptions />

            <div className="flex flex-grow-0 justify-end space-y-2 border-t p-6">
              <Link
                href={'/'}
                className="flex items-center text-xs uppercase hover:text-green-500"
              >
                Refill Tokens <ArrowRight className="ml-1 w-4" />
              </Link>
            </div>
          </article>

          {/** Recharge History */}
          <article className="w-full space-y-4 border border-gray-200 col-span-4">
            <div className="items-top flex-grow flex-col space-y-2 px-6 pt-4">
              <h2 className="text-lg font-semibold">Recharge History</h2>
              <p className="text-sm leading-none text-gray-400">
                Our most popular plan for individuals and smaller teams
              </p>
            </div>

            <RechargeTable />

            <div className="flex flex-grow-0 justify-end space-y-2 border-t p-6">
              <Link
                href={'/'}
                className="flex items-center text-xs uppercase hover:text-green-500"
              >
                Refill Tokens <ArrowRight className="ml-1 w-4" />
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
