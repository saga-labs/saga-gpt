import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

// icons
import { ArrowRight } from '@phosphor-icons/react';
import { Pencil1Icon } from '@radix-ui/react-icons';

export const PaymentMethod = () => {
  return (
    <div className="w-full space-y-4 border border-gray-200">
    <div className="items-top flex-col space-y-2 px-6 pt-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>
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

        <Pencil1Icon className="h-5 w-5 text-gray-700" />
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
  </div>
  )
}
