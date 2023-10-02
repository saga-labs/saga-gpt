import React from "react";

// Icons
import { PaperPlaneIcon } from "@radix-ui/react-icons";

interface Props {
  handler: (message: string) => void;
}

export const ChatInput: React.FC<Props> = ({ handler }) => {
  const [message, setMessage] = React.useState("");
  const [command, setCommand] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value; // Extract the value from the event object
    setMessage(newMessage);

    if (newMessage.charAt(0) == "/") {
      // If the message starts with a slash, it's a command
      setCommand(true);
    } else {
      setCommand(false);
    }
  };

  return (
    <div>
      <label htmlFor="PromptArea" className="sr-only">
        Prompt for user input
      </label>

      {command && <CommmandPalette />}

      <div className="overflow-hidden flex flex-row align-center rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="PromptArea"
          className="w-full resize-none border-none align-center focus:ring-0 sm:text-sm"
          rows={3}
          placeholder="Send a message"
          value={message} // Bind the value of the textarea to the 'message' state
          onChange={handleOnChange}
        />

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            className="flex flex-row items-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={() => handler("Hello")}
          >
            Send <PaperPlaneIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CommmandPalette = () => {
  return (
    <ul className="space-y-1 bg-white rounded-lg border border-gray-200 shadow-sm mb-2">
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
