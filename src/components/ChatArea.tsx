import React from "react";

export const ChatArea = () => {
  return (
    <div>
      <label htmlFor="OrderNotes" className="sr-only">
        Order notes
      </label>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="OrderNotes"
          className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
          rows={4}
          placeholder="Chat away!"
        ></textarea>

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
          >
            Clear
          </button>

          <button
            type="button"
            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
