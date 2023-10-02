import React from "react";

interface MessageProps {
  sender: string;
  content: string;
  isUser?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  sender,
  content,
  isUser,
}) => {
  return (
    <article className="rounded border border-gray-100 bg-white opacity-75">
      <div className="flex items-start gap-4 p-4">
        <div className="block shrink-0">
          {isUser ? (
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="h-10 w-10 rounded-sm object-cover"
            />
          ) : (
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1670163426610-69cdc930f4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              className="h-10 w-10 rounded-sm object-cover"
            />
          )}
        </div>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              GPT-4
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">{content}</p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>

              <p className="text-xs">14 comments</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by
              <a href="#" className="font-medium underline hover:text-gray-700">
                John
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
