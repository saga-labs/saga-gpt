import React from "react";

const Commands = () => {
  return (
    <ul className="sticky space-y-1 bg-white rounded-lg border border-gray-200 shadow-sm mb-2">
      <li>
        <a
          href=""
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          General
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Teams
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Billing
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Invoices
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Account
        </a>
      </li>
    </ul>
  );
};

export default Commands;
